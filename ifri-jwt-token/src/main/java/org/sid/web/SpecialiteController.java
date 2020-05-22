package org.sid.web;

import org.sid.dao.SpecialiteDao;
import org.sid.entities.AnneeAcademique;
import org.sid.entities.Sem_Grade;
import org.sid.entities.Specialite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@CrossOrigin(value = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value = "/specialite")
public class SpecialiteController{
    @Autowired
    private SpecialiteDao specialiteDao;

    @GetMapping("/list")
    public List<Specialite> list(){
        return specialiteDao.findAll();
    }

    @GetMapping("/{code}")
    public Specialite getSpecilite(@PathVariable String code){
        return specialiteDao.findByCode(code);
    }

    @PostMapping("/save")
    public Specialite save(@RequestBody Specialite specialite){
        return specialiteDao.saveAndFlush(specialite);
    }

    @DeleteMapping("/delete/{code}")
    public boolean supGrade(@PathVariable String code){
        specialiteDao.deleteById(code);
        return true;
    }

}
