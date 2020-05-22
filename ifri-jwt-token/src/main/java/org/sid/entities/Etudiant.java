package org.sid.entities;


import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;


import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@DiscriminatorValue("Etudiant")
public class Etudiant extends AppUser {
	@Column(unique = true)
	private long matricule;

	
	@OneToMany(mappedBy = "etudiant")
	private List<Note> notes = new ArrayList<Note>();

	public Etudiant() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Etudiant(String nom, String prenom, String sexe, long telephone, String email, String typePersonne, String username, String password, String role, long matricule) {
		super(nom, prenom, sexe, telephone, email, typePersonne, username, password, role);
		this.matricule = matricule;
	}

	public long getMatricule() {
		return matricule;
	}

	public void setMatricule(long matricule) {
		this.matricule = matricule;
	}

	@JsonIgnore
	public List<Note> getNotes() {
		return notes;
	}

	public void setNotes(List<Note> notes) {
		this.notes = notes;
	}

	

	
	
	
}
