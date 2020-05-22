package org.sid.web;

import org.sid.dao.SemestreDao;
import org.sid.entities.Grade;
import org.sid.entities.Semestre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(value = "http://localhost:4200", maxAge = 3600)
@RequestMapping(value="/semestre")
public class SemestreController {

    @Autowired
    private SemestreDao semestreDao;

    @GetMapping("/list")
    public List<Semestre> getSemestre(){
        return semestreDao.findAll();
    }

    @RequestMapping(value = "/{semId}", method = RequestMethod.GET)
    public Optional<Semestre> getOneGrade(@PathVariable Integer semId){
        return semestreDao.findById(semId);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public Semestre saveSemestre(@RequestBody Semestre sem){
        return semestreDao.saveAndFlush(sem);
    }

    @DeleteMapping("/delete/{semId}")
    public boolean supGrade(@PathVariable Integer semId){
        semestreDao.deleteById(semId);
        return true;
    }

}
