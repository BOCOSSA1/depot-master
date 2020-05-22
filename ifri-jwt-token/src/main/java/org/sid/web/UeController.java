package org.sid.web;

import org.sid.dao.UeDao;
import org.sid.entities.AnneeAcademique;
import org.sid.entities.Specialite;
import org.sid.entities.Ue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(value = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value = "/ue")
public class UeController {
    @Autowired
    private UeDao ueDao;

    @GetMapping("/list")
    public List<Ue> listUe(){
        return ueDao.findAll();
    }

    @GetMapping("/{ueId}")
    public Optional<Ue> getAnneeAcad(@PathVariable Integer ueId){
        return ueDao.findById(ueId);
    }

    @PostMapping("/save")
    public Ue saveUe(@RequestBody Ue ue){
        return ueDao.saveAndFlush(ue);
    }

    @RequestMapping(value = "/delete/{ueId}", method = RequestMethod.DELETE)
    public boolean supUe(@PathVariable Integer ueId){
        ueDao.deleteById(ueId);
        return true;
    }
}
