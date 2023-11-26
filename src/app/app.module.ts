import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './FrontOffice/Component/header/header.component';
import { FooterComponent } from './FrontOffice/Component/footer/footer.component';
import { PageAcceuilComponent } from './FrontOffice/Component/page-acceuil/page-acceuil.component';
import { AboutComponent } from './FrontOffice/Component/about/about.component';
import { LoginComponent } from './FrontOffice/Component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PrimengModule } from './primeng/primeng.module';
import { CorpHomePageComponent } from './FrontOffice/Component/corp-home-page/corp-home-page.component';
import { ListOfActivitiesComponent } from './FrontOffice/Component/Acivities/list-of-activities/list-of-activities.component';
import { ActiviteComponent } from './FrontOffice/Component/Acivities/activite/activite.component';
import { AdminHomepageComponent } from './BackOffice/Component/admin-homepage/admin-homepage.component';
import { SideBarComponent } from './BackOffice/Component/side-bar/side-bar.component';
import { SlidershowComponent } from './FrontOffice/Component/slidershow/slidershow.component';
import { BlogsComponent } from './FrontOffice/Component/blogs/blogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFormComponent } from './FrontOffice/Component/blogs/add-form/add-form.component';
import { BlogComponent } from './FrontOffice/Component/blogs/blog/blog.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './BackOffice/Component/profile/profile.component';
import { DatePipe } from '@angular/common';
import { SlectedactComponent } from './FrontOffice/Component/Acivities/slectedact/slectedact.component';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from './services/admin.service';
import { AdminHeaderComponent } from './BackOffice/Component/admin-header/admin-header.component';
import { DashboardComponent } from './BackOffice/Component/dashboard/dashboard.component';
import { AddActivitiesComponent } from './BackOffice/Component/add-activities/add-activities.component';
import { ActivitiesListComponent } from './BackOffice/Component/activities-list/activities-list.component';
import { UpdateActivitieComponent } from './BackOffice/Component/update-activitie/update-activitie.component';
import { SettingsComponent } from './BackOffice/Component/settings/settings.component';
import { AddAdminComponent } from './BackOffice/Component/add-admin/add-admin.component';
import { UserProfilComponent } from './FrontOffice/Component/User/user-profil/user-profil.component';
import { CalenderComponent } from './FrontOffice/Component/User/calender/calender.component';
import { EditAdminComponent } from './BackOffice/Component/edit-admin/edit-admin.component';
import { AddUserComponent } from './BackOffice/Component/add-user/add-user.component';
import { UserInformationsComponent } from './FrontOffice/Component/User/user-informations/user-informations.component';
import { UserupdatePasswordComponent } from './FrontOffice/Component/User/edit/userupdate-password/userupdate-password.component';
import { UserupdateInformationsComponent } from './FrontOffice/Component/User/edit/userupdate-informations/userupdate-informations.component';
import { UpdateAdminProfilComponent } from './BackOffice/Component/profile/update-admin-profil/update-admin-profil.component';
import { UpdateAdminPasswordComponent } from './BackOffice/Component/profile/update-admin-password/update-admin-password.component';
import { PipePersoPipe } from './pipe-perso.pipe';
import { HelloPipe } from './hello.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageAcceuilComponent,
    AboutComponent,
    LoginComponent,
    CorpHomePageComponent,
    
    ListOfActivitiesComponent,
    ActiviteComponent,
    AdminHomepageComponent,
    SideBarComponent,
    SlidershowComponent,
    BlogsComponent,
    AddFormComponent,
    BlogComponent,
    ErrorComponent,
    ProfileComponent,
    SlectedactComponent,
    AdminHeaderComponent,
    DashboardComponent,
    AddActivitiesComponent,
    ActivitiesListComponent,
    UpdateActivitieComponent,
    SettingsComponent,
    AddAdminComponent,
    UserProfilComponent,
    CalenderComponent,
    EditAdminComponent,
    AddUserComponent,
    UserInformationsComponent,
    UserupdatePasswordComponent,
    UserupdateInformationsComponent,
    UpdateAdminProfilComponent,
    UpdateAdminPasswordComponent,
    PipePersoPipe,
    HelloPipe,
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    PrimengModule ,
    HttpClientModule,
  ],
  providers: [DatePipe,MatDialog,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
