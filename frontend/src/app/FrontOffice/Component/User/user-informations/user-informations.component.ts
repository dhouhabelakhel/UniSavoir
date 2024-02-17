import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.css']
})
export class UserInformationsComponent  implements OnInit{
  user!:User;
  ngOnInit(): void {
const userData=localStorage.getItem("session");
if(userData)
this.user=JSON.parse(userData);
  }
}
