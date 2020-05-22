export class Personne {
  personneId: number;
  nom: string;
  prenom: string;
  sexe: string;
  telephone: number;
  matricule: string;
  email: string;
  typePersonne: string
  username : string;
  password: string;
  role: string;
  

  constructor(
    personneId: number,
      nom: string,
      prenom: string,
      sexe: string,
      telephone: number,
      matricule: string,
      email: string,
      typePersonne: string,
      username : string,
      password: string,
      role: string
  ) {
      this.personneId = personneId;
      this.nom = nom;
      this.prenom = prenom;
      this.sexe = sexe;
      this.telephone = telephone;
      this.matricule = matricule;
      this.email = email;
      this.typePersonne = typePersonne;
      this.username = username;
      this.password = password;
      this.role = role;
  }
}
