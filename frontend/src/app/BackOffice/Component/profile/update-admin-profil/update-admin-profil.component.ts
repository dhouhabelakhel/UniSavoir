import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-admin-profil',
  templateUrl: './update-admin-profil.component.html',
  styleUrls: ['./update-admin-profil.component.css']
})
export class UpdateAdminProfilComponent {
  admin!: Admin; 
  profileForm!: FormGroup; 

  constructor(private adminService: AdminService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
   let adminData = localStorage.getItem('session');
    if (adminData) {
     this.admin = JSON.parse(adminData);
      this.profileForm = this.formBuilder.group({
       email: [this.admin?.email,Validators.email],
        fullName: [this.admin?.fullName],
        adresse: [this.admin?.adresse,Validators.maxLength(100)],
        phoneNumber: [this.admin?.phoneNumber,[Validators.minLength(8),Validators.pattern(/^[0-9]+$/)]],
      });
    } else {
      console.error('Aucune donnée trouvée dans le stockage local.');
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
  

  update() {
    this.adminService.updateAdminInfos(this.admin.id,this.profileForm.get('email')?.value,this.profileForm.get('fullName')?.value,this.profileForm.get('adresse')?.value,this.profileForm.get('phoneNumber')?.value).subscribe(
      admin=>localStorage.setItem("session",JSON.stringify(admin))
    )
  }
}
