export class Admin {
    constructor(
        public id:number,
        public userName:string,
        public password:string,
        public email:string,
        public fullName?:string,
        public adresse?:string,
        public phoneNumber?:number,
      public Role?:string){}
}
