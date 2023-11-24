import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      userName: [this.user?.userName],
      password: [this.user?.password],
      email: [this.user?.email],
      fullName: [this.user?.fullName],
      adresse: [this.user?.adresse],
      phoneNumber: [this.user?.phoneNumber],
      Role:[this.user?.Role],
      listOfActivities:[this.user.listOfActivities]
    });
   }
  }
}
