import { AnneeAcademique } from './annee-academique';
import { SemGradeComponent } from '../sem-grade/sem-grade.component';

export class Ue {

    constructor(
        public ueId: number,
	    public ueCode: string,
	    public ueLibelle: string,
        public moyenneValidation: number,
        public anneeAcademique: AnneeAcademique,
        public sem_Grade: SemGradeComponent){}
        

}
