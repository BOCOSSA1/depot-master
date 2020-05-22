package org.sid.dao;

import org.sid.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface NoteDao extends JpaRepository<Note, Integer> {
/*
    @Query("SELECT n FROM Note n join n.ec ec WHERE ec.ue=:uecode")
           List<Note> findNoteByFilter(@Param("uecode") String uecode);
*/

}
