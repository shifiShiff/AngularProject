import { Component } from '@angular/core';
import { Student } from '../../modals/student';
import { CurrentStudentDetailsComponent } from "./current-student-details/current-student-details.component";
import { CommonModule } from '@angular/common'; // הוסף את זה


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule,CurrentStudentDetailsComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
 
  listOfStudent : Student []=[
    new Student(111,"Shifi","Shiff","Yabrov","0527132865",true,new Date(),98),
    new Student(222,"Sara","Levi","bb","0527132985",false,new Date(2024,9,12),90),
    new Student(333,"Tamar","Choen","r Akiva","052760854",true,new Date(),70)

  ];

  selected:number=0;

  

  show(id: number) {
    this.selected=id
  }

  edit(){
    this.selected=-1
  }

  
  saveDetailesFather(s: Student) {
     this.listOfStudent.push(s);
  }


  updateDetailesFather(s: Student) {
    if(this.listOfStudent.findIndex(stud => stud.ID === s.ID)== -1){
     this.listOfStudent.push(s);

   }
    else{
     this.listOfStudent = this.listOfStudent.map(stud => stud.ID === s.ID? s : stud);
 }
}

  

}
