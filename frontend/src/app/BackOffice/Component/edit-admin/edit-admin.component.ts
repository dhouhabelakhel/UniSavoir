import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Admin } from 'src/app/classes/admin';
import { userType } from '../enum/userType';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  selectedAdmin!:Admin;
  editAdmin!:FormGroup;
  Roles= Object.values(userType); 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private formBuilder:FormBuilder,
  private adminSerivce:AdminService,private dialogRef: MatDialogRef<EditAdminComponent>) {
   
  }
  ngOnInit(): void {
    this.selectedAdmin=this.data.admin;
    this.editAdmin=this.formBuilder.nonNullable.group({
  userName:[this.selectedAdmin.userName],
  password:[this.selectedAdmin.password],
 email:[this.selectedAdmin.email],
fullName:[this.selectedAdmin.fullName],
adresse:[this.selectedAdmin.adresse],
phoneNumber:[this.selectedAdmin.phoneNumber,[Validators.minLength(8),Validators.pattern(/^[0-9]+$/)]],
Role:[userType.Admin]
    })
    }
    updateAdmin(){
      
      this.adminSerivce.updateAdmin(this.selectedAdmin.id,this.editAdmin.value).subscribe(data=>{
        this.dialogRef.close();
      });

    }
    close(){
      this.dialogRef.close();
    }


    public get Username(){
      return this.editAdmin.get('userName');
    }
    public get password(){
      return this.editAdmin.get('password');
    }
    public get email(){
      return this.editAdmin.get('email');
    }
    public get phone(){
      return this.editAdmin.get('phoneNumber');
    }
    isValidPassword():boolean{
      return (this.password?.errors?.['required']||this.password?.errors?.['pattern']) && this.password.touched;
     } 
    isValidEmail():boolean{
      return (this.email?.errors?.['required']||this.email?.errors?.['email']) && this.email.touched;
     }
     isValidPhone(){
      return (this.phone?.errors?.['minlength'] ||this.phone?.errors?.['pattern']) && this.phone.touched;
    }
}
