package org.sid.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

@Entity
public class Ue implements Serializable {
	@Id
	@GeneratedValue
	private Integer ueId;
	private String ueCode;
	private String ueLibelle;
	private float moyenneValidation;


	//@JoinColumn(name="ec", nullable=false)
	//private Set<Ec> listEc = new HashSet<Ec>();
	//private final List<Ec> ecs;
	//@JsonManagedReference
	//protected Ec[] ecs = new Ec[3];
	//private Set<Ec> listEc = new HashSet<Ec>();
    @OneToMany(mappedBy = "ue")
	private List<Ec> ecs = new ArrayList<>();
	@ManyToOne
	//@JsonBackReference
	private AnneeAcademique anneeAcademique;
	
	@ManyToOne
	private Sem_Grade sem_Grade;

	public Ue() {
	}

	public Ue(String ueCode, String ueLibelle, float moyenneValidation, AnneeAcademique anneeAcademique, Sem_Grade sem_Grade) {
		this.ueCode = ueCode;
		this.ueLibelle = ueLibelle;
		this.moyenneValidation = moyenneValidation;
		this.anneeAcademique = anneeAcademique;
		this.sem_Grade = sem_Grade;

	}

    public Ue(String ueCode, String ueLibelle, float moyenneValidation, List<Ec> ecs, AnneeAcademique anneeAcademique, Sem_Grade sem_Grade) {
        this.ueCode = ueCode;
        this.ueLibelle = ueLibelle;
        this.moyenneValidation = moyenneValidation;
        this.ecs = ecs;
        this.anneeAcademique = anneeAcademique;
        this.sem_Grade = sem_Grade;
    }

    public Integer getUeId() {
		return ueId;
	}

	public void setUeId(Integer ueId) {
		this.ueId = ueId;
	}

	public String getUeCode() {
		return ueCode;
	}

	public void setUeCode(String ueCode) {
		this.ueCode = ueCode;
	}

	public String getUeLibelle() {
		return ueLibelle;
	}

	public void setUeLibelle(String ueLibelle) {
		this.ueLibelle = ueLibelle;
	}

	public float getMoyenneValidation() {
		return moyenneValidation;
	}

	public void setMoyenneValidation(float moyenneValidation) {
		this.moyenneValidation = moyenneValidation;
	}

	@JsonIgnore
    public List<Ec> getEcs() {
        return ecs;
    }

    public void setEcs(List<Ec> ecs) {
        this.ecs = ecs;
    }

    //Add Ec to Ue
    //@JsonIgnore
	public void addEc(Ec[] ec){
		addEc(ec);
	}

	public AnneeAcademique getAnneeAcademique() {
		return anneeAcademique;
	}

	public void setAnneeAcademique(AnneeAcademique anneeAcademique) {
		this.anneeAcademique = anneeAcademique;
	}

	public Sem_Grade getSem_Grade() {
		return sem_Grade;
	}

	public void setSem_Grade(Sem_Grade sem_Grade) {
		this.sem_Grade = sem_Grade;
	}


}
