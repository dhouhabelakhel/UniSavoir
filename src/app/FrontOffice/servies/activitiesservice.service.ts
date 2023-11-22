import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesserviceService {
  private apiUrl = 'http://127.0.0.1:8000/api/produits';

    constructor(private http: HttpClient) { }
    getdata() {
      return this.http.get(this.apiUrl);
    }
}
