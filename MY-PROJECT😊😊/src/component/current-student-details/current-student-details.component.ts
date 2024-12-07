import { Student } from '../../modals/student';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-current-student-details',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './current-student-details.component.html',
  styleUrl: './current-student-details.component.css'
})
export class CurrentStudentDetailsComponent {

  @Input() id: number = 0;
  @Input() list: Student[] = [];



s!:Student;

@Output()
saveStudent : EventEmitter<any> = new EventEmitter<any>();

saveStudentDetails(Id:string,firstName:string,lastName:string, Address:string, Avg:string){

  this.s=new Student(Number(Id),firstName,lastName,Address,null,true,null,Number(Avg))
  this.saveStudent.emit(this.s)

}

}


