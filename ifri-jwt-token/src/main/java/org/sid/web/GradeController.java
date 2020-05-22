package org.sid.web;

import org.sid.dao.GradeDao;
import org.sid.entities.Grade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(value = "http://localhost:4200", maxAge = 3600)
@RequestMapping(value="/grade")
public class GradeController {
    @Autowired
    private GradeDao gradeDao;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Grade> getGrade(){
        return gradeDao.findAll();
    }

    @RequestMapping(value = "/{gradeId}", method = RequestMethod.GET)
    public Optional<Grade> getGrade(@PathVariable Integer gradeId){
        return gradeDao.findById(gradeId);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public Grade saveGrade(@RequestBody Grade grd){
        return gradeDao.saveAndFlush(grd);
    }

    @RequestMapping(value = "/delete/{gradeId}", method = RequestMethod.DELETE)
    public boolean supGrade(@PathVariable Integer gradeId){
        gradeDao.deleteById(gradeId);
        return true;
    }

}
