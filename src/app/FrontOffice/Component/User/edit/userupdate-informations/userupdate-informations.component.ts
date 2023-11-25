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
      email: [this.user?.email],
      fullName: [this.user?.fullName],
      adresse: [this.user?.adresse],
      phoneNumber: [this.user?.phoneNumber],
    
    });
   }
  }
  updateUserInfos(){
  this.adminService.updateUserInfos(this.user.id,this.profileForm.get('email')?.value,this.profileForm.get('fullName')?.value,this.profileForm.get('adresse')?.value,this.profileForm.get('phoneNumber')?.value).subscribe(
    User=>localStorage.setItem("session",JSON.stringify(User))
  )
}
}
