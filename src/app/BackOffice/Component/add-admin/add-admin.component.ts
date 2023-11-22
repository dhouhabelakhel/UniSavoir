import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { userType } from '../enum/userType';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  AddAdmin!:FormGroup;
constructor(private formBuilder:FormBuilder,private adminService:AdminService){}
  ngOnInit(): void {
    this.AddAdmin=this.formBuilder.nonNullable.group({
  userName:[''],
  password:[''],
 email:[''],
fullName:[''],
adresse:[''],
phoneNumber:[],
Role:['admin']


    })
    }
    addAdmin(){
      this.adminService.getAdminByUserName(this.AddAdmin.get('userName')?.value).subscribe(data=>{
        if (data.length>0){
          console.log("existe deja"); 
        }
        else 
        this.adminService.addAdmin(this.AddAdmin.value).subscribe();
      })
        
        
     
      
    }



}
