import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role:string="public"
  constructor(private router:Router,private route:ActivatedRoute,private adminSerivce:AdminService){}

  ngOnInit(): void {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      const user = JSON.parse(storedSession);
      this.role = user.Role;
    }
  }
  logout(){
    this.role="public";
    this.router.navigate(["home"]);
    this.adminSerivce.logout();
  }
  login(){
    this.router.navigate(['/login']);
  }
}
