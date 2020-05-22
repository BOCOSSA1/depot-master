import { Ec } from './ec';
import { Etudiant } from './etudiant';

export class Note {
    constructor(
        public noteId: number,
        public note: number,
        public noteDate: Date,
        public ec: Ec,
        public etudiant: Etudiant,
        public moyenneUe?: number
    ){}
}
