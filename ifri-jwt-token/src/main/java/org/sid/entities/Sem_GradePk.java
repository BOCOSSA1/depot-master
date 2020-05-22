package org.sid.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Embeddable
public class Sem_GradePk implements Serializable {
	@NotNull
	private Integer gradeId;
	@NotNull
	private Integer semId;
	
	
	
	public Sem_GradePk() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Sem_GradePk(@NotNull Integer gradeId, @NotNull Integer semId) {
		this.gradeId = gradeId;
		this.semId = semId;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Sem_GradePk pk = (Sem_GradePk) o;
		if (gradeId != pk.semId) return false;
		return semId == pk.semId;
	}

	public Integer getGradeId() {
		return gradeId;
	}

	public void setGradeId(Integer gradeId) {
		this.gradeId = gradeId;
	}

	public Integer getSemId() {
		return semId;
	}

	public void setSemId(Integer semId) {
		this.semId = semId;
	}

	@Override
	public int hashCode() {
		return Objects.hash(gradeId, semId);
	}

    @Override
    public String toString() {
        return "Sem_GradePk{" +
                "gradeId=" + gradeId +
                ", semId=" + semId +
                '}';
    }
}
