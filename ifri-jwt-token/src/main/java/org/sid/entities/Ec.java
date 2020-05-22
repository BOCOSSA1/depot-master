package org.sid.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Ec {
    @Id
    @GeneratedValue
    private Integer ecId;
    private String ecCode;
    private String ecLibelle;
    private Integer coefficient;

    @OneToMany(mappedBy = "ec")
    private List<Note> notes = new ArrayList<>();

    @ManyToOne
    private Ue ue;

    public Ec() {
    }

    public Ec(String ecCode, String ecLibelle, Integer coefficient, Ue ue) {
        this.ecCode = ecCode;
        this.ecLibelle = ecLibelle;
        this.coefficient = coefficient;
        this.ue = ue;
    }

    public Integer getEcId() {
        return ecId;
    }

    public void setEcId(Integer ecId) {
        this.ecId = ecId;
    }

    public String getEcCode() {
        return ecCode;
    }

    public void setEcCode(String ecCode) {
        this.ecCode = ecCode;
    }

    public String getEcLibelle() {
        return ecLibelle;
    }

    public void setEcLibelle(String ecLibelle) {
        this.ecLibelle = ecLibelle;
    }

    public Integer getCoefficient() {
        return coefficient;
    }

    public void setCoefficient(Integer coefficient) {
        this.coefficient = coefficient;
    }

    @JsonIgnore
    public List<Note> getNotes() {
        return notes;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }

    //@JsonIgnore
    public Ue getUe() {
        return ue;
    }

    public void setUe(Ue ue) {
        this.ue = ue;
    }

    @Override
    public String toString() {
        return "Ec{" +
                "ecId=" + ecId +
                ", ecCode='" + ecCode + '\'' +
                ", ecLibelle='" + ecLibelle + '\'' +
                ", notes=" + notes +
                ", ue=" + ue +
                '}';
    }
}
