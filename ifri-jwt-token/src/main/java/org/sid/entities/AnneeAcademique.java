package org.sid.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class AnneeAcademique {

    @Id @GeneratedValue
    private Integer anneeId;
    private Integer anneeEncours;
    private String anneeScolaire;

    @OneToMany(mappedBy = "anneeAcademique")
    private List<Ue> ues = new ArrayList<Ue>();

    public AnneeAcademique() {
    }

    public AnneeAcademique(Integer anneeEncours, String anneeScolaire) {
        this.anneeEncours = anneeEncours;
        this.anneeScolaire = anneeScolaire;
    }

    public Integer getAnneeId() {
        return anneeId;
    }

    public void setAnneeId(Integer anneeId) {
        this.anneeId = anneeId;
    }

    public Integer getAnneeEncours() {
        return anneeEncours;
    }

    public void setAnneeEncours(Integer anneeEncours) {
        this.anneeEncours = anneeEncours;
    }

    public String getAnneeScolaire() {
        return anneeScolaire;
    }

    public void setAnneeScolaire(String anneeScolaire) {
        this.anneeScolaire = anneeScolaire;
    }

    @JsonIgnore
    public List<Ue> getUes() {
        return ues;
    }

    public void setUes(List<Ue> ues) {
        this.ues = ues;
    }
}
