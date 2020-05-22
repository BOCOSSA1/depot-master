package org.sid.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Specialite {
    @Id
    private String code;
    private String specialite;

    public Specialite() {
    }

    public Specialite(String code, String specialite) {
        this.code = code;
        this.specialite = specialite;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getSpecialite() {
        return specialite;
    }

    public void setSpecialite(String specialite) {
        this.specialite = specialite;
    }

}
