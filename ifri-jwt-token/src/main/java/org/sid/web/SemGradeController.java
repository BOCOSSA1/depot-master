package org.sid.web;

import org.sid.dao.SemGradeDao;
import org.sid.entities.Sem_Grade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(value = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value = "/semgrade")
public class SemGradeController {
    @Autowired
    private SemGradeDao semGradeDao;
    @GetMapping("/list")
    public List<Sem_Grade> getSemGrade(){
        return semGradeDao.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Sem_Grade> getSemGrade (@PathVariable Integer id){
        return semGradeDao.findById(id);
    }


    @PostMapping("/save")
    public Sem_Grade save(@RequestBody Sem_Grade sem_grade){
        System.out.println(">>>>>"+sem_grade);
        //Sem_GradePk pk = new Sem_GradePk();
        /*if(sem_grade.getPk().getGradeId()!= null && sem_grade.getPk().getSemId()!=null){
            Sem_GradePk pk = new Sem_GradePk();
            pk = new Sem_GradePk(sem_grade.getPk().getGradeId(), sem_grade.getPk().getSemId());
            sem_grade.setPk(pk);
            return semGradeDao.saveAndFlush(sem_grade);
        }*/
        Sem_Grade semg = new Sem_Grade(sem_grade.getSemestre(), sem_grade.getGrade(), sem_grade.getSpecialite());

        return semGradeDao.saveAndFlush(semg);

       // System.out.println(sem_grade.getPk().getSemId());
        //return semGradeDao.saveAndFlush(sem_grade);
       // return null;
    }

    @DeleteMapping("/delete/{id}")
    public boolean supGrade(@PathVariable Integer id){
        semGradeDao.deleteById(id);
        return true;
    }


}
