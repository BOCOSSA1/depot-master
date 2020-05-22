package org.sid.dao;

import org.sid.entities.Semestre;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SemestreDao extends JpaRepository<Semestre, Integer> {

}
