package org.sid.dao;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;

import org.sid.entities.AnneeAcademique;

public interface AnneeAcademiqueDao extends JpaRepository<AnneeAcademique, Integer> {

}
