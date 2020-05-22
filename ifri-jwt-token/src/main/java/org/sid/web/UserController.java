package org.sid.web;

import org.sid.dao.UserRepository;
import org.sid.entities.AppRole;
import org.sid.entities.AppUser;
import org.sid.entities.RegisterForm;
import org.sid.service.AccountService;
import org.sid.service.AccountServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin(value = "http://localhost:4200", maxAge = 3600)
@RestController
public class UserController {

    @Autowired
    private AccountService accountService;
    @Autowired
    private AccountServiceImpl accountServiceImpl;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/users")
    public AppUser signUp(@RequestBody RegisterForm data){

        String username = data.getUsername();
        AppUser user = accountService.findUserByUserName(username);
        if (user != null) throw new RuntimeException("This username already exist, try with an other username");
        String password = data.getPassword();
        String repassword = data.getRepassword();
        if (!password.equals(repassword))
            throw new RuntimeException("You must confirm your password");
        AppUser u = new AppUser();
        u.setNom(data.getNom());
        u.setPrenom(data.getPrenom());
        u.setSexe(data.getSexe());
        u.setTypePersonne(data.getTypePersonne());
        u.setTelephone(data.getTelephone());
        u.setEmail(data.getEmail());
        u.setUsername(username);
        u.setPassword(password);
        //u.setRole(data.getRole());
        accountService.saveUser(u);
        accountService.addRoleToUser(username, "USER");
        return (u);
    }

    @PostMapping("/create-users")
    public AppUser createUser (@RequestBody RegisterForm data){

        String username = data.getUsername();
        AppUser user = accountService.findUserByUserName(username);
        if (user != null) throw new RuntimeException("This username already exist, try with an other username");
        String password = data.getPassword();
        String repassword = data.getRepassword();
        if (!password.equals(repassword))
            throw new RuntimeException("You must confirm your password");
        AppUser u = new AppUser();
        u.setNom(data.getNom());
        u.setPrenom(data.getPrenom());
        u.setSexe(data.getSexe());
        u.setTypePersonne(data.getTypePersonne());
        u.setTelephone(data.getTelephone());
        u.setEmail(data.getEmail());
        u.setUsername(username);
        u.setPassword(password);
       // AppRole appRole = new AppRole();
        //appRole.setRoleName(data.getRole());
        accountService.saveUser(u);
        //accountService.saveRole(appRole);
        //accountService.addRoleToUser(username, "USER");
        accountServiceImpl.addRoleToUser(username, data.getRole());
        return (u);
    }

    @GetMapping("/list-users")
    public List<AppUser> getUsers(){
        AppRole role = new AppRole();
        role.getRoleName();
        return userRepository.findAll();
    }

    @PutMapping("/update-user")
    public AppUser update( @RequestBody RegisterForm data){

        System.out.println("dddddddddd"+data);
        String username = data.getUsername();
        AppUser user = accountService.findUserByUserName(username);
        if (user != null) {
           //AppUser u = new AppUser();
            user.setNom(data.getNom());
            user.setPrenom(data.getPrenom());
            user.setSexe(data.getSexe());
            user.setTypePersonne(data.getTypePersonne());
            user.setTelephone(data.getTelephone());
            user.setEmail(data.getEmail());
            //u.setRole(data.getRole());
            accountService.saveUser(user);
            accountServiceImpl.addRoleToUser(username, data.getRole());

            return (user);

        }
        else {
            throw new RuntimeException("This user does not exist");
        }


    }

    @GetMapping(value="/one-user/{username}")
    public AppUser getOneUser(@PathVariable String username){
        return userRepository.findByUsername(username);

    }

    @Transactional
    @DeleteMapping(value = "/delete-user/{personneId}")
    public boolean deleteUser(@PathVariable Integer personneId) {
        userRepository.deleteById(personneId);
        return true;
        }
        /*
        * String username = data.getUsername();
        AppUser user = accountService.findUserByUserName(username);
        if (user != null) {
            userRepository.deleteByUsername(username);
        } else {
            throw new RuntimeException("This user does not exist");
        }
*/
    }
