package org.sid.web;

import org.sid.dao.NoteDao;
import org.sid.entities.Note;
import org.sid.entities.PayloadRecherche;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(value = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value = "/note")
public class NoteController {
    @Autowired
    private NoteDao noteDao;

    @GetMapping("/list")
    public List<Note> noteList(){
        return noteDao.findAll();
    }


    @GetMapping("/{noteId}")
    public Optional<Note> getNote(@PathVariable Integer noteId){
        return noteDao.findById(noteId);
    }

    @PostMapping("/save")
    public Note saveNote(@RequestBody Note note){
        System.out.println(">>>>>"+note);
        return noteDao.saveAndFlush(note);
    }

    @DeleteMapping("/delete/{noteId}")
    public boolean supNote(@PathVariable Integer noteId){
        noteDao.deleteById(noteId);
        return true;
    }
/*
    @GetMapping("/notefilter")
    public List<Note> getFilterNote(@RequestBody String uecode){
        return noteDao.findNoteByFilter(uecode);
    }

*/

}
