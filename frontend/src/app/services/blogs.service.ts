import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../classes/blog';
import { Observable, Subject, tap } from 'rxjs';

const URL = 'https://unisavoir-json-server-backend.onrender.com/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {



  constructor(private http: HttpClient) {}

  getblog(): Observable<Blog[]> {
    return this.http.get<Blog[]>(URL);
  }

  saveblog(data: Blog): Observable<Blog> {
    return this.http.post<Blog>(URL, data);
  }

}
