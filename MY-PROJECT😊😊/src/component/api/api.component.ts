import { Component, OnInit } from '@angular/core';
import { APIService } from '../../Services/api.service';
import { MyEvent } from '../../modals/Event';
import {  JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Book } from '../../modals/Book';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [JsonPipe,HttpClientModule],
  providers: [APIService], // הוסף את הספק כאן
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})


export class APIComponent implements OnInit {
  
constructor(public eventService:APIService){}

  event: Book[]=[];

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data =>{
        this.event=data;
    });
  }

}
