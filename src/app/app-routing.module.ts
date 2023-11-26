import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './FrontOffice/Component/header/header.component';
import { PageAcceuilComponent } from './FrontOffice/Component/page-acceuil/page-acceuil.component';
import { AboutComponent } from './FrontOffice/Component/about/about.component';
import { LoginComponent } from './FrontOffice/Component/login/login.component';
import { CorpHomePageComponent } from './FrontOffice/Component/corp-home-page/corp-home-page.component';
import { ListOfActivitiesComponent } from './FrontOffice/Component/Acivities/list-of-activities/list-of-activities.component';
import { AdminHomepageComponent } from './BackOffice/Component/admin-homepage/admin-homepage.component';
import { BlogsComponent } from './FrontOffice/Component/blogs/blogs.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './BackOffice/Component/profile/profile.component';
import { SlectedactComponent } from './FrontOffice/Component/Acivities/slectedact/slectedact.component';
import { DashboardComponent } from './BackOffice/Component/dashboard/dashboard.component';
import { ActivitiesListComponent } from './BackOffice/Component/activities-list/activities-list.component';
import { SettingsComponent } from './BackOffice/Component/settings/settings.component';
import { AddFormComponent } from './FrontOffice/Component/blogs/add-form/add-form.component';
import { UserProfilComponent } from './FrontOffice/Component/User/user-profil/user-profil.component';
import { authGuard } from './guard/auth.guard';
import { CalenderComponent } from './FrontOffice/Component/User/calender/calender.component';
import { UserInformationsComponent } from './FrontOffice/Component/User/user-informations/user-informations.component';
import { UserupdateInformationsComponent } from './FrontOffice/Component/User/edit/userupdate-informations/userupdate-informations.component';
import { UserupdatePasswordComponent } from './FrontOffice/Component/User/edit/userupdate-password/userupdate-password.component';
import { UpdateAdminProfilComponent } from './BackOffice/Component/profile/update-admin-profil/update-admin-profil.component';
import { UpdateAdminPasswordComponent } from './BackOffice/Component/profile/update-admin-password/update-admin-password.component';

const routes: Routes = [
  {path:'',component:PageAcceuilComponent,
 children:[
  {path:'',title:'Home',component:CorpHomePageComponent},

  {path:'home',title:'Home',component:CorpHomePageComponent},
  {path:'activities',title:'Activities',component:ListOfActivitiesComponent },

  {path:'blogs',title:'Blog',component:BlogsComponent},
  {path:'profil',title:'profil',component:UserProfilComponent,canActivate:[authGuard],
children:[
  {path:"",title:"Infos",component:UserInformationsComponent},
      {path:"editpassword",title:"edit passowrd",component:UserupdatePasswordComponent},
    {path:"editinfos",title:"edit informations",component:UserupdateInformationsComponent},
  {path:"calendar",title:"calendar",component:CalenderComponent}

]
},

  {path:'about',title:'About',component:AboutComponent},
  
 ]
},
{ path: 'selectedact/:id', title: 'details', component: SlectedactComponent },
{path:'login',title:'LOGIN',component:LoginComponent},
{path:'adminhome',title:'AdminHome',component:AdminHomepageComponent,
children:[
  {path:'',title:'dashboard',component:DashboardComponent},
  {path:'dashboard',title:'dashboard',component:DashboardComponent},
  {path:'settings',title:'dashboard',component:SettingsComponent},
  {path:'activities',title:'Activities',component:ActivitiesListComponent},
  {path:'profile',title:'Profile',component:ProfileComponent},
  {path:'infos',title:'update infos',component:UpdateAdminProfilComponent},
  {path:'editpassword',title:'edit password',component:UpdateAdminPasswordComponent}


]},
{path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
