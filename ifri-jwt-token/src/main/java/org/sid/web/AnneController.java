package org.sid.web;

import org.sid.dao.AnneeAcademiqueDao;
import org.sid.entities.AnneeAcademique;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(value = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value = "/annee")
public class AnneController {

    @Autowired
    private AnneeAcademiqueDao anneeAcademiqueDao;

    @GetMapping("/list")
    public List<AnneeAcademique> getAnneeAcad(){
        return anneeAcademiqueDao.findAll();
    }

    @GetMapping("/{anneeId}")
    public Optional<AnneeAcademique> getAnneeAcad(@PathVariable Integer anneeId){
        return anneeAcademiqueDao.findById(anneeId);
    }

    @RequestMapping("/save")
    public AnneeAcademique saveAnneAcad (@RequestBody AnneeAcademique anneeAcad){
        return anneeAcademiqueDao.saveAndFlush(anneeAcad);
    }


    @DeleteMapping("/delete/{anneeId}")
    public boolean deleteAnneAcad (@PathVariable Integer anneeId){
        anneeAcademiqueDao.deleteById(anneeId);
        return true;
    }
}
