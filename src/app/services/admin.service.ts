// admin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject, Observable, BehaviorSubject, mergeMap, throwError } from 'rxjs';
import { Admin } from '../classes/admin';
import { Activite } from '../classes/activite';
import { User } from '../classes/user';
const URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root',
})
export class AdminService {


  constructor(private http: HttpClient) {}
 

 
  getAdminById(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${URL}/${id}`);
  }
  verifAuth(userName: string,password:string): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${URL}?userName=${userName}&&password=${password}`);
  }
  getAdminByUserName(userName: string): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${URL}?userName=${userName}`);
  }
  updateAdmin(id:number,admin:Admin):Observable<Admin[]>{
return this.http.put<Admin[]>(URL+"/"+id,admin);
  }
  getAdmins():Observable<Admin[]>{
    return this.http.get<Admin[]>(URL);
  }
  addAdmin(admin:Admin):Observable<Admin>{
    return this.http.post<Admin>(URL,admin);
  }
  deleteAdmin(id:number):Observable<Admin>{
    return this.http.delete<Admin>(URL+"/"+id);
  }
  upadtepassword(id:number,password:string):Observable<Admin>{
   return this.http.patch<Admin>(`${URL}/${id}`,{password});
  }
  logout(){
   localStorage.clear();
  }


  addActivityToUser(userId: number, activity: Activite): Observable<User> {
    return this.http.get<User>(`${URL}/${userId}`).pipe(
      mergeMap((user: User) => {
        user.listOfActivities.push(activity); 
        return this.http.put<User>(`${URL}/${userId}`, user); 
      })
    );
  }
  removeActivityFromUser(userId: number, activityId: number): Observable<User> {
    return this.http.get<User>(`${URL}/${userId}`).pipe(
      mergeMap((user: User) => {
        const index = user.listOfActivities.findIndex(activity => activity.id === activityId);
        if (index !== -1) {
          user.listOfActivities.splice(index, 1); // Retire l'activité de la liste
          return this.http.put<User>(`${URL}/${userId}`, user); // Met à jour l'utilisateur
        } else {
          return throwError('Activity not found'); // Retourne une erreur si l'activité n'est pas trouvée dans la liste
        }
      })
    );
  }
  
}
