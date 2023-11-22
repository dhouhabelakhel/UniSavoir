import { Activite } from "./activite";
import { Admin } from "./admin";

export class User extends Admin {
    public listOfActivities: Activite[];
  
    constructor(
      id: number,
      userName: string,
      password: string,
      email: string,
      listOfActivities: Activite[],
      fullName?: string,
      adresse?: string,
      phoneNumber?: number,
      Role?: string,
    ) {
      super(id, userName, password, email, fullName, adresse, phoneNumber, Role);
      this.listOfActivities = listOfActivities;
    }
  }