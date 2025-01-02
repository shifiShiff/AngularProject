import { Component } from '@angular/core';
import { TeacherService } from '../../Services/teacher.service';
import { Teacher } from '../../modals/Teacher';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';



@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {

  constructor(private teacherService:TeacherService){}

  public TeacherList=this.teacherService.Get();
  public teacher=new Teacher(null, "",[])

  AddTeacher(){
    if(!this.TeacherList.find(t=>t.Id==this.teacher.Id))
      this.teacherService.Add(new Teacher(this.teacher.Id, this.teacher.Name, this.teacher.classes))
    else
      this.teacherService.Update(new Teacher(this.teacher.Id, this.teacher.Name, this.teacher.classes))

  }


}
