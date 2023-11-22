import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignupMode = false;

  constructor(private router: Router, private adminService: AdminService) { }
  ngOnInit(): void {

  }
  returnHomePage() {
    this.router.navigate(['/home']);
  }

  LogIn(user: string, pass: string) {


    this.adminService.verifAuth(user,pass).subscribe(
      (admins) => {
        if (admins && admins.length > 0) {
          localStorage.setItem("session", JSON.stringify(admins[0]));
          localStorage.setItem("etat","conected");
          if(admins[0].Role=="admin")
          this.router.navigate(['adminhome']);
        else if(admins[0].Role=="user") 
          this.router.navigate(['home']);
        } else {
          console.log("No user found .");
          localStorage.setItem("etat","disconected");
        }
      },
      (error) => {
        console.error("error!!!", error);
      }
    );

  }
 

  onSignupClick() {
    this.isSignupMode = !this.isSignupMode;
  }
}
