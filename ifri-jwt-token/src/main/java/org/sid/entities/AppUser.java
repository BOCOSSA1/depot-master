package org.sid.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class AppUser extends Personne{
    //@Id
    //@GeneratedValue
    //private Long id;
    @Column(unique = true)
    private String username;
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<AppRole> roles = new ArrayList<>();

    public AppUser() {
    }

    public AppUser(String nom, String prenom, String sexe, long telephone, String email, String typePersonne, String username, String password, String role) {
        super(nom, prenom, sexe, telephone, email, typePersonne);
        this.username = username;
        this.password = password;

    }

    //public AppUser(Object o, String admin, String s, Object o1) {
    //}

    public AppUser(String username, String password) {
        this.username = username;
        this.password = password;
    }



    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @JsonIgnore
    public String getPassword() {
        return password;
    }
    @JsonSetter
    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<AppRole> getRoles() {
        return roles;
    }

    public void setRoles(Collection<AppRole> roles) {
        this.roles = roles;
    }
}
