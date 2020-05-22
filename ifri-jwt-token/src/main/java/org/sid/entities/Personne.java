package org.sid.entities;

import java.io.Serializable;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity

/*
 * cette annotation tien lieu pour stocker les informations de toutes les type
 * de personne dans la même table personne et les différencier grâce à une
 * colonne qui est type de personne 
 * Abract class parce que je veux créer soit
 * des personne etudiant ou utilisateur par exemple
 */
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "TYPE_USER", discriminatorType = DiscriminatorType.STRING, length = 255)
public abstract class Personne implements Serializable {
	@Id
	@GeneratedValue
	protected Integer personneId;
	protected String nom;
	protected String prenom;
	protected String sexe;
	protected long telephone;
	@NotBlank
	@Column(unique = true)
	@Email
	protected String email;
	protected String typePersonne;
	
	public Personne() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Personne(String nom, String prenom, String sexe, long telephone, String email,
			String typePersonne) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.sexe = sexe;
		this.telephone = telephone;
		this.email = email;
		this.typePersonne = typePersonne;
	}

	public Integer getPersonneId() {
		return personneId;
	}

	public void setPersonneId(Integer personneId) {
		this.personneId = personneId;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getSexe() {
		return sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public long getTelephone() {
		return telephone;
	}

	public void setTelephone(long telephone) {
		this.telephone = telephone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	 public String getTypePersonne() { return typePersonne; }

	 public void setTypePersonne(String typePersonne) { this.typePersonne = typePersonne; }

	
	

}
