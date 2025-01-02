import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeacherService } from '../../Services/teacher.service';
import { Teacher } from '../../modals/Teacher';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {


  constructor(private techerService: TeacherService, private fb: FormBuilder) { }
  teacherFrom!: FormGroup;
  teachers=this.techerService.Get();

  ngOnInit() {
    this.teacherFrom = this.fb.group({
      id: ['', [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      classes: ['', [Validators.required, Validators.minLength(2)]]
    })

  }

  onSubmit() {
    if (this.teacherFrom.valid) {
      this.techerService.Add(new Teacher(this.teacherFrom.value.id, this.teacherFrom.value.name, this.teacherFrom.value.classes));
      this.teacherFrom.reset();
    }
    else
      console.log("invlid form");


  }



}
