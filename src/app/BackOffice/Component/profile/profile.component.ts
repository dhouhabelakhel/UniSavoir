import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  admin!: Admin; 
  profileForm!: FormGroup; 

  constructor(private adminService: AdminService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
   let adminData = localStorage.getItem('session');
    if (adminData) {
     this.admin = JSON.parse(adminData);
      this.profileForm = this.formBuilder.group({
        userName: [this.admin?.userName],
        password: [this.admin?.password],
        email: [this.admin?.email],
        fullName: [this.admin?.fullName],
        adresse: [this.admin?.adresse],
        phoneNumber: [this.admin?.phoneNumber],
        Role:[this.admin?.Role]
      });
    } else {
      console.error('Aucune donnée trouvée dans le stockage local.');
    }
  }
 


  update() {
    this.adminService.updateAdmin(this.admin.id, this.profileForm.value).subscribe(data => {
      console.log('Succès');
      localStorage.setItem("session", JSON.stringify(data));
     
    });
  }
}
