import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  AddUser!:FormGroup;
  constructor(private formBuilder:FormBuilder,private adminService:AdminService){}
    ngOnInit(): void {
      this.AddUser=this.formBuilder.nonNullable.group({
    userName:[''],
    password:[''],
   email:[''],
  fullName:[''],
  adresse:[''],
  phoneNumber:[],
  Role:['user']
  
  
      })
      }

      addUser(){
        this.adminService.getAdminByUserName(this.AddUser.get('userName')?.value).subscribe(data=>{
          if (data.length>0){
            console.log("existe deja"); 
          }
          else 
          this.adminService.addAdmin(this.AddUser.value).subscribe();
        })
          
      }
}
