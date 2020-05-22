package org.sid.web;

import org.sid.entities.AppUser;
import org.sid.entities.RegisterForm;
import org.sid.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(value = "http://localhost:4200",  maxAge = 3600)
@RestController
public class AccountRestController {
    @Autowired
    private AccountService accountService;

    @PostMapping("/register")
    public AppUser register(@RequestBody RegisterForm userForm){
        if (!userForm.getPassword().equals(userForm.getRepassword()))
            throw new RuntimeException("You must confirm your password");
        AppUser user = accountService.findUserByUserName(userForm.getUsername());
        if (user != null) throw new RuntimeException("This user already exists");
        AppUser appUser = new AppUser();

        appUser.setUsername(userForm.getUsername());
        appUser.setPassword(userForm.getPassword());
        accountService.saveUser(appUser);
        accountService.addRoleToUser(userForm.getUsername(), "USER");
        return appUser;
    }
/*
    @GetMapping("/login")
    public String login(Model model, String error, String logout) {
        if (error != null)
            model.addAttribute("error", "Your username and password is invalid.");

        if (logout != null)
            model.addAttribute("message", "You have been logged out successfully.");

        return "login";
    }
*/
}
