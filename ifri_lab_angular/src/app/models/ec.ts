import { Ue } from './ue';

export class Ec {
    constructor(
        public ecId: number,
        public ecCode: string,
        public ecLibelle: string,
        public coefficient: number,
        public ue: Ue
    ){}
    
}
