import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { matchingPasswordsValidator } from 'src/app/validators/validatePass';

@Component({
  selector: 'app-update-admin-password',
  templateUrl: './update-admin-password.component.html',
  styleUrls: ['./update-admin-password.component.css']
})
export class UpdateAdminPasswordComponent {
  updatepassword!:FormGroup;

  constructor(private formBuilder:FormBuilder,private adminService:AdminService){}
  ngOnInit(): void {
    this.updatepassword = this.formBuilder.group({
      oldpassword: ['', [Validators.required]],
      newpassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/)]],
      confirmpassword: ['', [Validators.required]],
    }, {
      validator: matchingPasswordsValidator('newpassword', 'confirmpassword')
    });
  }
  public get Newpass(){
    return this.updatepassword.get('newpassword');
  }
  public get confpass(){
    return this.updatepassword.get('confirmpassword');
  }
  isValidNewPass(){
    return (this.Newpass?.errors?.['pattern'] || this.Newpass?.errors?.['minlength'] || this.Newpass?.errors?.['required'] )&& this.Newpass?.dirty;
  }
  isMatchPass(){
return this.confpass?.errors?.['passwordMismatch'] && this.confpass?.dirty;
  }
 
  updatepwd(){
   const userData=localStorage.getItem("session");
    if (userData) {
      const user=JSON.parse(userData);
      if(this.updatepassword.get('oldpassword')?.value===user.password){
      this.adminService.upadtepassword(user.id,this.updatepassword.get('newpassword')?.value).subscribe(updatedAdmin=>{
        localStorage.setItem("session",JSON.stringify(updatedAdmin))
      });}
      this.adminService.showAlert("invalid password");
      this.updatepassword.reset();
    }
  }
}
