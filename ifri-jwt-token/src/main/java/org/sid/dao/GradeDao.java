package org.sid.dao;

import org.sid.entities.Grade;
import org.springframework.data.jpa.repository.JpaRepository;


public interface GradeDao extends JpaRepository<Grade, Integer> {

}
