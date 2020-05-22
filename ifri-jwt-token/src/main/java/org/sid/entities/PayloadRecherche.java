package org.sid.entities;

public class PayloadRecherche {

    private Specialite specialiteId;
    private Grade gradeId;
    private Ue uecode;
    private Semestre semId;


    public PayloadRecherche() {
    }

    public PayloadRecherche(Specialite specialiteId, Grade gradeId, Ue uecode, Semestre semId) {
        this.specialiteId = specialiteId;
        this.gradeId = gradeId;
        this.uecode = uecode;
        this.semId = semId;
    }

    public Specialite getSpecialiteId() {
        return specialiteId;
    }

    public void setSpecialiteId(Specialite specialiteId) {
        this.specialiteId = specialiteId;
    }

    public Grade getGradeId() {
        return gradeId;
    }

    public void setGradeId(Grade gradeId) {
        this.gradeId = gradeId;
    }

    public Ue getUecode() {
        return uecode;
    }

    public void setUecode(Ue uecode) {
        this.uecode = uecode;
    }

    public Semestre getSemId() {
        return semId;
    }

    public void setSemId(Semestre semId) {
        this.semId = semId;
    }
}
