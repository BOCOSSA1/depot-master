package org.sid.dao;

import org.sid.entities.Ec;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EcDao extends JpaRepository<Ec, Integer> {
}
