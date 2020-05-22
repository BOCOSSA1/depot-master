package org.sid.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.sid.entities.Ue;

public interface UeDao extends JpaRepository<Ue, Integer> {

}
