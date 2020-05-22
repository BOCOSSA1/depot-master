package org.sid.service;

import org.sid.entities.AppRole;
import org.sid.entities.AppUser;
import org.sid.entities.Etudiant;

public interface AccountService {
    public AppUser saveUser(AppUser user);
    public AppUser createAutorite(AppUser user);
    public AppUser createAdmin(AppUser user);
    public Etudiant saveEtudiant(Etudiant etudiant);
    public Etudiant createEtudiant(Etudiant etudiant);
    public AppRole saveRole(AppRole role);
    public void addRoleToUser(String username, String roleName);
    public AppUser findUserByUserName (String username);
    public Etudiant findEtudiantByUsername(String username);

}
