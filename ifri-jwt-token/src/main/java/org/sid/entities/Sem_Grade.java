package org.sid.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
public class Sem_Grade implements Serializable {



    @Id
    @GeneratedValue
    private Integer id;

	//@EmbeddedId
	//private Sem_GradePk pk;

    @ManyToOne
  //  @JoinColumn(name = "semId",nullable = false, insertable = false, updatable = false)
    private Semestre semestre;
	@ManyToOne
   // @JoinColumn(name = "gradeId",nullable = false, insertable = false, updatable = false)
    private Grade grade;

	private String specialite;
	
	@OneToMany(mappedBy = "sem_Grade")
	private List<Ue> ues = new ArrayList<Ue>();

	public Sem_Grade() {
		super();
		// TODO Auto-generated constructor stub
	}

    public Sem_Grade(Semestre semestre, Grade grade, String specialite) {
        this.semestre = semestre;
        this.grade = grade;
        this.specialite = specialite;
    }

    /*
        public Sem_Grade(Sem_GradePk pk, String specialite) {
            this.pk = pk;
            this.specialite = specialite;
        }
    */
    public String getSpecialite() {
		return specialite;
	}

	public void setSpecialite(String specialite) {
		this.specialite = specialite;
	}
/*
	public Sem_GradePk getPk() {
		return pk;
	}

	public void setPk(Sem_GradePk pk) {
		this.pk = pk;
	}
*/
//---------


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Semestre getSemestre() {
		return semestre;
	}

	public void setSemestre(Semestre semestre) {
		this.semestre = semestre;
	}

	public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }


//---------


    @JsonIgnore
	public List<Ue> getUes() {
		return ues;
	}
	@JsonIgnore
	public void setUes(List<Ue> ues) {
		this.ues = ues;
	}

    @Override
    public String toString() {
        return "Sem_Grade{" +
                "id=" + id +
                ", semestre=" + semestre +
                ", grade=" + grade +
                ", specialite='" + specialite + '\'' +
                ", ues=" + ues +
                '}';
    }
}
