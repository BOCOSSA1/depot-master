package org.sid.web;

import org.sid.dao.EtudiantDao;
import org.sid.dao.UserRepository;
import org.sid.entities.*;

import org.sid.service.AccountService;
import org.sid.service.AccountServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(value = "http://localhost:4200")
@RestController
public class EtudiantController {
    @Autowired
    private AccountService accountService;
    @Autowired
    private AccountServiceImpl accountServiceImpl;
    @Autowired
    private EtudiantDao etudiantDao;
    private UserRepository userRepository;

    @GetMapping("/etudiant/list")
    public List<Etudiant> list(){
        return etudiantDao.findAll();
    }

    @RequestMapping(value = "/etudiant/{personneId}", method = RequestMethod.GET)
    public Optional<Etudiant> getEtudiant(@PathVariable Integer personneId){
        return etudiantDao.findById(personneId);
    }
    @PostMapping("/etudiant")
    public Etudiant signUp(@RequestBody EtudiantForm data) {

        String username = data.getUsername();
        AppUser user = accountService.findUserByUserName(username);
        if (user != null) throw new RuntimeException("This username already exist, try with an other username");
        String password = data.getPassword();
        String repassword = data.getRepassword();
        if (!password.equals(repassword))
            throw new RuntimeException("You must confirm your password");
        Etudiant etudiant = new Etudiant();
        etudiant.setNom(data.getNom());
        etudiant.setPrenom(data.getPrenom());
        etudiant.setSexe(data.getSexe());
        etudiant.setTypePersonne(data.getTypePersonne());
        etudiant.setMatricule(data.getMatricule());
        etudiant.setTelephone(data.getTelephone());
        etudiant.setEmail(data.getEmail());
        etudiant.setUsername(username);
        etudiant.setPassword(password);
        accountService.saveUser(etudiant);
        accountService.addRoleToUser(username, "USER");
        return (etudiant);
    }

    @PostMapping("/create-etudiants")
    public Etudiant createEtudiant(@RequestBody EtudiantForm data) {

        String username = data.getUsername();
        AppUser user = accountService.findUserByUserName(username);
        if (user != null) throw new RuntimeException("This username already exist, try with an other username");
        String password = data.getPassword();
        String repassword = data.getRepassword();
        if (!password.equals(repassword))
            throw new RuntimeException("You must confirm your password");
        Etudiant etudiant = new Etudiant();
        etudiant.setNom(data.getNom());
        etudiant.setPrenom(data.getPrenom());
        etudiant.setSexe(data.getSexe());
        etudiant.setTypePersonne(data.getTypePersonne());
        etudiant.setMatricule(data.getMatricule());
        etudiant.setTelephone(data.getTelephone());
        etudiant.setEmail(data.getEmail());
        etudiant.setUsername(username);
        etudiant.setPassword(password);
        accountService.saveUser(etudiant);
        //accountService.addRoleToUser(username, "USER");
        //  AppRole appRole = new AppRole();
        // appRole.setRoleName(data.getRole());
        //accountService.saveRole(appRole);
        accountServiceImpl.addRoleToUser(username, data.getRole());
        //accountService.addRoleToUser(username, data.getRole());
        return (etudiant);
    }


    @PutMapping("/update-etudiants")
    public Etudiant updateEtudiant(@RequestBody EtudiantForm data) {

        String username = data.getUsername();
        Etudiant etudiant = accountService.findEtudiantByUsername(username);
        if (etudiant != null) {
            etudiant.setNom(data.getNom());
            etudiant.setPrenom(data.getPrenom());
            etudiant.setSexe(data.getSexe());
            etudiant.setTypePersonne(data.getTypePersonne());
            etudiant.setMatricule(data.getMatricule());
            etudiant.setTelephone(data.getTelephone());
            etudiant.setEmail(data.getEmail());
            etudiant.setUsername(username);
            accountService.saveUser(etudiant);
            accountServiceImpl.addRoleToUser(username, data.getRole());
            return (etudiant);
        }
        else {
            throw new RuntimeException("This student does not exists!");
        }
    }

}