package org.sid.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

@Entity
public class Note implements Serializable {
	@Id
	@GeneratedValue
	private Integer noteId;
	private float note;
	@Temporal(TemporalType.DATE)
	private Date noteDate;

	@ManyToOne
	private Ec ec;
	
	@ManyToOne
	private Etudiant etudiant;
	
	public Note() {
		super();
		// TODO Auto-generated constructor stub
	}
//


	public Note(float note, Date noteDate, Ec ec, Etudiant etudiant) {
		this.note = note;
		this.noteDate = noteDate;
		this.ec = ec;
		this.etudiant = etudiant;
	}

	public Integer getNoteId() {
		return noteId;
	}

	public void setNoteId(Integer noteId) {
		this.noteId = noteId;
	}

	public float getNote() {
		return note;
	}

	public void setNote(float note) {
		this.note = note;
	}

	public Date getNoteDate() {
		return noteDate;
	}

	public void setNoteDate(Date noteDate) {
		this.noteDate = noteDate;
	}

	public Ec getEc() {
		return ec;
	}

	public void setEc(Ec ec) {
		this.ec = ec;
	}

	public Etudiant getEtudiant() {
		return etudiant;
	}

	public void setEtudiant(Etudiant etudiant) {
		this.etudiant = etudiant;
	}

	@Override
	public String toString() {
		return "Note{" +
				"noteId=" + noteId +
				", note=" + note +
				", noteDate=" + noteDate +
				", ec=" + ec +
				", etudiant=" + etudiant +
				'}';
	}
}
