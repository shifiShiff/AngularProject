import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shifi-shiff';

  ShowBless(){
    let d=new Date();
    let hour=d.getHours();
   if(hour>6 && hour<13)
   return "Good Morning"
  if(hour<18)
  return "Good Afternoon"
  return "Good Night"
  }
}
