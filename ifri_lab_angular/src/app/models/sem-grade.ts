import { SemGradePk } from './semGradePk';
import { Grade } from './grade';
import { Semestre } from './semestre';

export class SemGrade {
    constructor(
        public id: number,
        public specialite: string,
        public grade: Grade,
        public semestre: Semestre){}

}
