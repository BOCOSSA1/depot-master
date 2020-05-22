package org.sid.dao;

import org.sid.entities.Sem_Grade;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SemGradeDao extends JpaRepository<Sem_Grade, Integer> {

    //public Sem_GradePk findByPk(Sem_GradePk pk);
    //public Sem_Grade findById(Integer id);
    //@Query("select sg.pk.gradeId,  sg.pk.semId, sg.specialite from Sem_Grade sg")
   // List<Object> listSemestreGrades();

}
