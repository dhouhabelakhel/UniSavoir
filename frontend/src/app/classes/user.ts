import { Activite } from "./activite";
import { Admin } from "./admin";

export class User extends Admin {
    public listOfActivities: Activite[];
    public  date_inscreption:Date;
    constructor(
      id: number,
      userName: string,
      password: string,
      email: string,
      listOfActivities: Activite[],
      fullName: string,
      adresse: string,
      phoneNumber: number,
      Role: string,
      date_inscreption:Date
    ) {
      super(id, userName, password, email, fullName, adresse, phoneNumber, Role);
      this.listOfActivities = listOfActivities;
       this.date_inscreption=date_inscreption
    }
  }
