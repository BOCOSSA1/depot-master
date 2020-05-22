package org.sid.dao;

import org.sid.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<AppUser, Integer> {
    public AppUser findByUsername (String username);
    public AppUser deleteByUsername (String username);

    //List<AppUser> findAllRole(String username);
}
