package org.sid.web;

import org.sid.dao.EcDao;
import org.sid.entities.Ec;
import org.sid.entities.Ue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(value = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value = "/ec")
public class EcController {
    @Autowired
    private EcDao ecDao;

    @GetMapping("/list")
    public List<Ec> listEc(){
        return ecDao.findAll();
    }


    @GetMapping("/{ecId}")
    public Optional<Ec> getOneEc(@PathVariable Integer ecId){
        return ecDao.findById(ecId);
    }

    @PostMapping("/save")
    public Ec save(@RequestBody Ec ec){
        return ecDao.saveAndFlush(ec);
    }

    @DeleteMapping("/delete/{ecId}")
    public boolean deleteAnneAcad (@PathVariable Integer ecId){
        ecDao.deleteById(ecId);
        return true;
    }

}
