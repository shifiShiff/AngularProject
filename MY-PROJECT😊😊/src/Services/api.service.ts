import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyEvent } from '../modals/Event';
import { Observable } from 'rxjs';
import { Book } from '../modals/Book';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  private url= "http://localhost:5057/api/Book";
  // private url= "https://eventsapi.onrender.com/api/Events";


  constructor(private http:HttpClient) { }

  getEvents(): Observable<Book[]>{
    return this.http.get<Book[]>(this.url);
  }
}
