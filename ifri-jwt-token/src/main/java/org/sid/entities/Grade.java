package org.sid.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Grade implements Serializable {
	@Id
	private Integer gradeId;
	private String gradeLibelle;


	public Grade() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Grade(Integer gradeId, String gradeLibelle) {
		this.gradeId = gradeId;
		this.gradeLibelle = gradeLibelle;
	}

	public Integer getGradeId() {
		return gradeId;
	}


	public void setGradeId(Integer gradeId) {
		this.gradeId = gradeId;
	}


	public String getGradeLibelle() {
		return gradeLibelle;
	}


	public void setGradeLibelle(String gradeLibelle) {
		this.gradeLibelle = gradeLibelle;
	}


}
