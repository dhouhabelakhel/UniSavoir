import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-userupdate-password',
  templateUrl: './userupdate-password.component.html',
  styleUrls: ['./userupdate-password.component.css']
})
export class UserupdatePasswordComponent implements OnInit{
  updatepassword!:FormGroup;

  constructor(private formBuilder:FormBuilder,private adminService:AdminService){}
  ngOnInit(): void {
this.updatepassword=this.formBuilder.nonNullable.group({
  oldpassword:[''],
  newpassword:[''],
  confirmpassword:[''],
})
  }
  updatepwd(){
   const userData=localStorage.getItem("session");
    if (userData) {
      const user=JSON.parse(userData);
      this.adminService.upadtepassword(user.id,this.updatepassword.get('newpassword')?.value).subscribe(updatedUser=>{
        localStorage.setItem("session",JSON.stringify(updatedUser))
      });

    }
  }
 
}
