package org.sid.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Semestre implements Serializable {
	@Id
	private Integer semId;
	private String semLibelle;

	public Semestre() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Semestre(Integer semId, String semLibelle) {
		this.semId = semId;
		this.semLibelle = semLibelle;
	}

	public Integer getSemId() {
		return semId;
	}


	public void setSemId(Integer semId) {
		this.semId = semId;
	}


	public String getSemLibelle() {
		return semLibelle;
	}


	public void setSemLibelle(String semLibelle) {
		this.semLibelle = semLibelle;
	}


}
