import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  admin!:Admin;
  profileForm!: FormGroup; 

  constructor(private adminService: AdminService, private formBuilder: FormBuilder) {}


  ngOnInit(): void {
   let userdata=localStorage.getItem("session");
   if (userdata) {
    this.admin = JSON.parse(userdata);
    this.profileForm = this.formBuilder.group({
      userName: [this.admin?.userName],
      password: [this.admin?.password],
      email: [this.admin?.email],
      fullName: [this.admin?.fullName],
      adresse: [this.admin?.adresse],
      phoneNumber: [this.admin?.phoneNumber],
      Role:[this.admin?.Role]
    });
   }
  }
}
