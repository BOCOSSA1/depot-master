package org.sid.dao;

import java.util.List;

import org.sid.entities.AppRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.sid.entities.Etudiant;

public interface EtudiantDao extends JpaRepository<Etudiant, Integer> {

    public Etudiant findByUsername(String username);

}
