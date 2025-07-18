import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activite } from '../classes/activite';
const URL="https://unisavoir-json-server-backend.onrender.com/activities"
@Injectable({
  providedIn: 'root'
})
export class ActivitiesService implements OnInit {

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }
getActivities():Observable<Activite[]>{
  return this.http.get<Activite[]>(URL);
}
getActivitieById(id:number):Observable<Activite>{
  return this.http.get<Activite>(URL+"/"+id);
}
search(key?: string, category?: string): Observable<Activite[]> {
  let url = URL + "?";

  if (key) {
    url += "q=" + key;
  }

  if (category) {
    url += (key ? "&" : "") + "categorie=" + category;
  }

  return this.http.get<Activite[]>(url);
}
addActivitie(act:Activite):Observable<Activite>{
  return this.http.post<Activite>('http://localhost:5000/addActivity',act);
}
deleteActivitie(id:number):Observable<Activite>{
 return this.http.delete<Activite>(URL+"/"+id)
}
editActivitie(id:number,act:Activite):Observable<Activite>{
  return this.http.put<Activite>(`${URL}/${id}`,act);
}
updateNbplace(id:number,nbplace:number):Observable<Activite>{
return this.http.patch<Activite>(`${URL}/${id}`,{nbplace});
}
}
