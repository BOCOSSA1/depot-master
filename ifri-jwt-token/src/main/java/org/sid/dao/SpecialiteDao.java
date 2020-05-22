package org.sid.dao;

import org.sid.entities.Specialite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecialiteDao extends JpaRepository<Specialite, String> {
    public Specialite findByCode(String code);
}
