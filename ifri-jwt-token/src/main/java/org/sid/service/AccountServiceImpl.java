package org.sid.service;

import org.sid.dao.EtudiantDao;
import org.sid.dao.RoleRepository;
import org.sid.dao.UserRepository;
import org.sid.entities.AppRole;
import org.sid.entities.AppUser;
import org.sid.entities.Etudiant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AccountServiceImpl implements AccountService {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private EtudiantDao etudiantDao;

    @Override
    public AppUser saveUser(AppUser user) {
        String hashPW = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(hashPW);
        return userRepository.save(user);
    }

    @Override
    public AppUser createAutorite(AppUser user) {
        String hashPW = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(hashPW);
        return userRepository.save(user);
    }

    @Override
    public AppUser createAdmin(AppUser user) {
        String hashPW = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(hashPW);
        return userRepository.save(user);
    }

    @Override
    public Etudiant saveEtudiant(Etudiant etudiant) {
        String hashPW = bCryptPasswordEncoder.encode(etudiant.getPassword());
        etudiant.setPassword(hashPW);
        return userRepository.save(etudiant);
    }

    @Override
    public Etudiant createEtudiant(Etudiant etudiant) {
        String hashPW = bCryptPasswordEncoder.encode(etudiant.getPassword());
        etudiant.setPassword(hashPW);
        return userRepository.save(etudiant);
    }

    @Override
    public AppRole saveRole(AppRole role) {
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        AppRole role = roleRepository.findByRoleName(roleName);
        AppUser user = userRepository.findByUsername(username);
        user.getRoles().add(role);

    }

    @Override
    public AppUser findUserByUserName(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public Etudiant findEtudiantByUsername(String username) {
        return etudiantDao.findByUsername(username);
    }


}
