import { Formateur } from "./formateur";
import { Skills } from "./skills";

export class Activite {
       
    constructor(public id :number,
               public intitule: string,
               public  photo: string,
               public  description:string,
               public   prix: number,
               public  nbplace:number,
               public  certification: boolean,
               public   date_debut: Date,
               public  duree: string,
               public  skills: Skills[],
               public  formateur: Formateur[],
               public  categorie: string,
               public  lieu: string) {   }
}
