import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { userType } from '../enum/userType';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  AddAdmin!:FormGroup;
constructor(private formBuilder:FormBuilder,private adminService:AdminService,private dialogRef: MatDialogRef<AddAdminComponent>){}
  ngOnInit(): void {
    this.AddAdmin=this.formBuilder.nonNullable.group({
  userName:['',Validators.required],
  password:['',[Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/)]],
 email:['',[Validators.required,Validators.email]],
fullName:[''],
adresse:[''],
phoneNumber:[],
Role:['admin']


    })
    }
    public get Username(){
      return this.AddAdmin.get('userName');
    }
    public get password(){
      return this.AddAdmin.get('password');
    }
    public get email(){
      return this.AddAdmin.get('email');
    }
    public get phone(){
      return this.AddAdmin.get('phoneNumber');
    }
    isValidPassword():boolean{
      return (this.password?.errors?.['required']||this.password?.errors?.['pattern']) && this.password.touched;
     } 
    isValidEmail():boolean{
      return (this.email?.errors?.['required']||this.email?.errors?.['email']) && this.email.touched;
     }
isValidUser():boolean{
 return this.Username?.errors?.['required'] && this.Username.touched;
}

isValidPhone(){
  return (this.phone?.errors?.['minlength'] ||this.phone?.errors?.['pattern']) && this.phone.touched;
}

    addAdmin(){
      this.adminService.getAdminByUserName(this.AddAdmin.get('userName')?.value).subscribe(data=>{
        if (data.length>0){
          this.adminService.showAlert("Already exists");
         
        }
        else 
        this.adminService.addAdmin(this.AddAdmin.value).subscribe();
        this.dialogRef.close();
      })
      
    }
close(){
  this.dialogRef.close();
}


}
