package org.sid;

import org.sid.dao.*;
import org.sid.entities.*;
import org.sid.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Stream;

@SpringBootApplication
public class JwtTokenApplication implements CommandLineRunner {

	@Autowired
	private UserDetailsService userDetailsService;
	@Autowired
	private TaskRepository taskRepository;
	@Autowired
	private AccountService accountService;
	@Autowired
	private UeDao ueDao;
	@Autowired
	private EcDao ecDao;
	@Autowired
	private SemestreDao semestreDao;
	@Autowired
	private NoteDao noteDao;

	@Autowired
	private GradeDao gradeDao;
	@Autowired
	private  AnneeAcademiqueDao anneeAcademiqueDao;
	@Autowired
	private EtudiantDao etudiantDao;

	@Autowired
	private  SemGradeDao semGradeDao;
	@Autowired
	private SpecialiteDao specialiteDao;

	public static void main(String[] args) {
		SpringApplication.run(JwtTokenApplication.class, args);
	}
	@Bean
	public BCryptPasswordEncoder getBCPE(){
		return new  BCryptPasswordEncoder();
	}
	@Override
	public void run(String... args) throws Exception {
/*
        //----------------------------------------------------------

		//-----------------------------------------------------------------------
		//--------------------------------------------------------------------

		accountService.saveUser(new AppUser("ZOHOU", "Pierre-Jérôme","homme",96308633,"zohou@gmail.com","admin","admin","admin", null));
		accountService.addRoleToUser("admin","ADMIN");

//--------------------------------------------------------------------

		Semestre sem1 = new Semestre(15,"semestre1");
		semestreDao.save(sem1);
		Semestre sem2 = new Semestre(16,"semestre2");
		semestreDao.save(sem2);
		Semestre sem3 = new Semestre(17,"semestre3");
		semestreDao.save(sem3);
		Semestre sem4 = new Semestre(18,"semestre4");
		semestreDao.save(sem4);
		Semestre sem5 = new Semestre(19,"semestre5");
		semestreDao.save(sem5);
		Semestre sem6 = new Semestre(20,"semestre6");
		semestreDao.save(sem6);
		Semestre sem7 = new Semestre(21,"semestre7");
		semestreDao.save(sem7);
		Semestre sem8 = new Semestre(22,"semestre8");
		semestreDao.save(sem8);
		Semestre sem9 = new Semestre(23,"semestre9");
		semestreDao.save(sem9);
		Semestre sem10 = new Semestre(24,"semestre10");
		semestreDao.save(sem10);
		Semestre sem11 = new Semestre(25,"semestre11");
		semestreDao.save(sem11);
		Semestre sem12 = new Semestre(26,"semestre12");
		semestreDao.save(sem12);

        specialiteDao.save(new Specialite("HK","Hack"));

//-------------------------------------------------------------------------------
		Etudiant etudiant1 = new Etudiant("BOTON", "Eunice","woman", 54544545, "eunice@gmail.com","etudiant", "eunice", "eunice", "USER", 229342333);
		etudiantDao.save(etudiant1);

		Sem_GradePk pk1 = new Sem_GradePk(1, 15);
		Sem_GradePk pk2 = new Sem_GradePk(1, 16);
		Sem_GradePk pk3 = new Sem_GradePk(2, 17);
		Sem_GradePk pk4 = new Sem_GradePk(2, 18);

		Sem_Grade sem_grade1 = new Sem_Grade(pk1,"SIRI");
		semGradeDao.save(sem_grade1);
		Sem_Grade sem_grade2 = new Sem_Grade(pk2,"IM");
		semGradeDao.save(sem_grade2);
		Sem_Grade sem_grade3 = new Sem_Grade(pk3,"GL");
		semGradeDao.save(sem_grade3);
		Sem_Grade sem_grade4 = new Sem_Grade(pk4,"SI");
		semGradeDao.save(sem_grade4);
*/
		//------------------------------------------------------
/*
		AnneeAcademique an1 = new AnneeAcademique("2014-2015", 2015);
		anneeAcademiqueDao.save(an1);
		AnneeAcademique an2 = new AnneeAcademique("2015-2016", 2016);
		anneeAcademiqueDao.save(an2);
		AnneeAcademique an3 = new AnneeAcademique("2016-2017", 2017);
		anneeAcademiqueDao.save(an3);
		AnneeAcademique an4 = new AnneeAcademique("2017-2018", 2018);
		anneeAcademiqueDao.save(an4);
		AnneeAcademique an5 = new AnneeAcademique("2018-2019",2019);
		anneeAcademiqueDao.save(an5);
		AnneeAcademique an6 = new AnneeAcademique("2019-2020", 2020);
		anneeAcademiqueDao.save(an6);
	*/
		//-------------------------------------------------------

        //Ec[] tab = new Ec[]{};
        //List<Ec> ecs = new ArrayList<>();
		/*
		Ue ue = new Ue("SBA", "Laboratoire Intofmatique", (float) 12.50, an1, sem_grade1);
        ueDao.save(ue);
		Ue ue1 = new Ue("C#", "Programmation C", (float) 12.50, an1, sem_grade2);
		ueDao.save(ue1);
		Ue ue2 = new Ue("SDB", "Base de Donnees", (float) 14.50, an1, sem_grade3);
		ueDao.save(ue2);

		//Ue ue3 = new Ue("JGV", "bivzvvi", (float) 13, an2, sem_grade1, );


		Ec ec1 = new Ec("POJP", "Programmation java pratique", ue);
        //ecs.add(ec1);
        //tab[1] = ec1;
		ecDao.save(ec1);

		Ec ec2 = new Ec("POJE", "Programmation java ecrite", ue);
        //ecs.add(ec2);
        ecDao.save(ec2);
		Ec ec3 = new Ec("POJPr", "Programmation java pratique projet", ue);
        //ecs.add(ec3);
        ecDao.save(ec3);

       // ue.setEcs(ecs);
       // ue.setEcs(tab);
        Ec ec4 = new Ec("EP", "Evaluation Permanante", ue1);
        ecDao.save(ec4);
        Ec ec5 = new Ec("PrJ", "Projet final", ue1);
        ecDao.save(ec5);
        Ec ec6 = new Ec("EP", "Evaluation Pratique", ue1);
        ecDao.save(ec6);

        Ec ec7 = new Ec("TP", "Travaux Pratique", ue2);
        ecDao.save(ec7);
        Ec ec8 = new Ec("ExP", "Exposé de Groupe", ue2);
        ecDao.save(ec8);

        DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

		Note n1 = new Note((float) 15.00, df.parse("12/03/2016"), ec1, etudiant1);
		noteDao.save(n1);
		Note n2 = new Note((float) 13.75, df.parse("12/09/2016"), ec3, etudiant1);
		noteDao.save(n2);
		Note n3 = new Note((float) 16.25, df.parse("12/03/2016"), ec2, etudiant1);
		noteDao.save(n3);
*/
        /*
		accountService.saveUser(new AppUser("BOCOSSA", "Joël","homme",96308633,"bocossa1996@gmail.com","admin","joland","super", null));
		accountService.saveUser(new AppUser("KLAKO", "Elfrida","femme",96736283,"klak@gmail.com","parent","frida","frid", null));
		accountService.saveUser(new AppUser("SOUSSIA", "Aurel","homme",96357614,"sosthene@gmail.com","autorite","aureli","aurore", null));
		accountService.saveUser(new AppUser("DOHOU", "Dirk","homme",61287548,"dirk@gmail.com","parent","dirk","checo", null));


		accountService.saveRole(new AppRole("SUPER_ADMIN"));
		accountService.saveRole(new AppRole("ADMIN"));
		accountService.saveRole(new AppRole("USER"));
		accountService.saveRole(new AppRole("AUTORITE"));

		accountService.addRoleToUser("joland", "SUPER_ADMIN");
		accountService.addRoleToUser("dirk", "ADMIN");
		accountService.addRoleToUser("frida", "USER");
		accountService.addRoleToUser("aureli", "AUTORITE");
*/
/*
         */
//-----------------------------------------------------------------------
		//End of the reel test
//-----------------------------------------------------------------------
		/*
		Filiere fil1 = new Filiere("GL","Genie_Logiciel");
		filiereDao.save(fil1);
		Filiere fil2 = new Filiere("SI","Securite_Informatique");
		filiereDao.save(fil2);
		Filiere fil3 = new Filiere("IM","Internet_Et_Multimedia");
		filiereDao.save(fil3);
		Filiere fil4 = new Filiere("SIRI","SIRI");
		filiereDao.save(fil4);
*/


/*
        -----------------------------------------------------------------------
                -----------------------------------------------------------------------
                        -----------------------------------------------------------------------
                                -----------------------------------------------------------------------
                                        -----------------------------------------------------------------------
		//noteDao.save(new Note());
		//filiereDao.save(new Filiere("GL", "Genie_Logiciel"));
		//filiereDao.save(new Filiere("IM", "Internet et Mul"));

		/*

*/

	//	accountService.saveUser(new RegisterForm("ZOHOU", "Jérôme", "Masculin", 57675765, "Jer@gmail.com", "Autorité", "admin", "jerome", "jerome"));
		//to save roles
		/*apte

*/
		//add role to super admin
		//apte -> accountService.addRoleToUser("joland", "SUPER_ADMIN");

		//to add role to user
		/*apte

*/
/*apte
		Stream.of("T1","T2","T3").forEach(t->{
			taskRepository.save(new Task(t));
		});
		taskRepository.findAll().forEach(t->{
			System.out.println(t.getTaskName());
		});*/
	}
}
