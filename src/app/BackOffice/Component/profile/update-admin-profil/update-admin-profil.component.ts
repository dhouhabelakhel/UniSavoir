import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
       email: [this.admin?.email],
        fullName: [this.admin?.fullName],
        adresse: [this.admin?.adresse],
        phoneNumber: [this.admin?.phoneNumber],
      });
    } else {
      console.error('Aucune donnée trouvée dans le stockage local.');
    }
  }
 


  update() {
    this.adminService.updateAdminInfos(this.admin.id,this.profileForm.get('email')?.value,this.profileForm.get('fullName')?.value,this.profileForm.get('adresse')?.value,this.profileForm.get('phoneNumber')?.value).subscribe(
      admin=>localStorage.setItem("session",JSON.stringify(admin))
    )
  }
}
