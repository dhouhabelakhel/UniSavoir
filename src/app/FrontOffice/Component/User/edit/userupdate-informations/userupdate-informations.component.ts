import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-userupdate-informations',
  templateUrl: './userupdate-informations.component.html',
  styleUrls: ['./userupdate-informations.component.css']
})
export class UserupdateInformationsComponent implements OnInit {
  user!:User;
  profileForm!: FormGroup; 

  constructor(private adminService: AdminService, private formBuilder: FormBuilder) {}


  ngOnInit(): void {
   let userdata=localStorage.getItem("session");
   if (userdata) {
    this.user = JSON.parse(userdata);
    this.profileForm = this.formBuilder.group({

      email: [this.user?.email,Validators.email],
      fullName: [this.user?.fullName],
      adresse: [this.user?.adresse,Validators.maxLength(100)],
      phoneNumber: [this.user?.phoneNumber,[Validators.minLength(8),Validators.pattern(/^[0-9]+$/)]],
    
    });
   }
  }
public get email(){
  return this.profileForm.get('email');
}
public get phone(){
  return this.profileForm.get('phoneNumber');
}
public get adresse(){
return this.profileForm.get('adresse');
}
isValidEmail(){
  return this.email?.errors?.['email'] && this.email.dirty;
}
isValidPhone(){
  return (this.phone?.errors?.['minlength'] ||this.phone?.errors?.['pattern']) && this.phone.dirty;
}
isValidAdresse(){
  return this.adresse?.errors?.['maxlength'] && this.adresse.dirty;
}

  updateUserInfos(){
  this.adminService.updateUserInfos(this.user.id,this.profileForm.get('email')?.value,this.profileForm.get('fullName')?.value,this.profileForm.get('adresse')?.value,this.profileForm.get('phoneNumber')?.value).subscribe(
    User=>localStorage.setItem("session",JSON.stringify(User))
  )
}
}
