import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StudentListComponent } from '../component/student-list/student-list.component';
import { TemplateDrivenFormsComponent } from "../component/template-driven-forms/template-driven-forms.component";
import { IconsFromTextComponent } from "../component/icons-from-text/icons-from-text.component";
import { ReactiveFormComponent } from '../component/reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive, RouterOutlet,HttpClientModule],
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
