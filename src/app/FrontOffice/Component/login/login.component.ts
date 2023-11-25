import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  singIn!: FormGroup;
  singUp!: FormGroup;
  constructor(private router: Router, private adminService: AdminService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.singIn = this.formBuilder.nonNullable.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.singUp = this.formBuilder.nonNullable.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/)]],
      email: ['', [Validators.required, Validators.email]],
      fullName: [''],
      adresse: [''],
      phoneNumber: [],
      Role: ['user'],
      listOfActivities: [[]],
    })
  }
  //logIn Validators
  public get Username() {
    return this.singIn.get('username');
  }
  public get pass() {
    return this.singIn.get('password');
  }
  isValidLogInUsername() {
    return this.Username?.errors?.['required'] && this.Username?.dirty;
  }
  isValidLogInPassword() {
    return this.pass?.errors?.['required'] && this.pass?.dirty;
  }
  //Sing up Validators
  public get name() {
    return this.singUp.get('userName');
  }
  public get password() {
    return this.singUp.get('password');
  }
  public get email() {
    return this.singUp.get('email');
  }

  isValidName() {
    return this.name?.errors?.['required'] && this.name?.dirty;
  }
  isValidPass() {
    return (this.password?.errors?.['required'] || this.password?.errors?.['pattern']) && this.password?.dirty;
  }
  isValidEmail() {
    return (this.email?.errors?.['required'] || this.email?.errors?.['email']) && this.email?.dirty;
  }

  SingUp() {
    this.adminService.getAdminByUserName(this.singUp.get('userName')?.value).subscribe(
      (users) => {
        if (users && users.length > 0)
          alert("existe deja!!")

        else {
          this.adminService.addAdmin(this.singUp.value).subscribe(data => {
            console.log(data);
            localStorage.setItem("session", JSON.stringify(data));
            localStorage.setItem("etat", "conected");
            this.router.navigate(['home']);
          });
        }
      }
    )
  }

  LogIn() {
    this.adminService.verifAuth(this.singIn.get('username')?.value, this.singIn.get('password')?.value).subscribe(
      (admins) => {
        if (admins && admins.length > 0) {
          localStorage.setItem("session", JSON.stringify(admins[0]));
          localStorage.setItem("etat", "conected");
          if (admins[0].Role == "admin")
            this.router.navigate(['adminhome']);
          else if (admins[0].Role == "user")
            this.router.navigate(['home']);
        } else {
          console.log("No user found .");

        }
      },
      (error) => {
        console.error("error!!!", error);
      }
    );

  }

//pour le changement de styles
  onSignupClick() {
    this.isSignupMode = !this.isSignupMode;
  }
}
