import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Student } from '../../modals/student';
import { CurrentStudentDetailsComponent } from "../current-student-details/current-student-details.component";
import { CommonModule } from '@angular/common';
import { InfromationPopupComponent } from '../infromation-popup/infromation-popup.component';
import { CoursesListComponent } from "../courses-list/courses-list.component";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, CurrentStudentDetailsComponent, InfromationPopupComponent, CoursesListComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  listOfStudent: Student[] = [
    new Student(111, "Shifi", "Shiff", "Yabrov", "0527132865", true, new Date(), 98),
    new Student(222, "Sara", "Levi", "bb", "0527132985", false, new Date(2024, 9, 12), 90),
    new Student(333, "Tamar", "Choen", "r Akiva", "052760854", true, new Date(), 70)

  ];

  selected: number = 0;

  @ViewChildren(InfromationPopupComponent)
  inforamtionChild!: QueryList<InfromationPopupComponent>;


  mycolor:string='black'
  studentColors: { [key: number]: string } = {};



  setColor(color: string, id:number) {
    // this.mycolor = color;
    this.studentColors[id]=color
  }


  show(id: number) {
    this.selected = id
  }

  edit() {
    this.selected = -1

  }

  delet(studId: number) {

    const studentIndex = this.listOfStudent.findIndex(student => student.ID === studId);
    if (studentIndex !== -1) {
      const selectedPopup = this.inforamtionChild.toArray()[studentIndex];
      if (selectedPopup) {
        selectedPopup.change("האם אתה בטוח שברצונך למחוק תלמיד זה??");
      }
    }
  }


  saveDetailesFather(s: Student) {
    this.listOfStudent.push(s);
  }


  updateDetailesFather(s: Student) {
    if (this.listOfStudent.findIndex(stud => stud.ID === s.ID) == -1) {
      this.listOfStudent.push(s);

    }
    else {
      this.listOfStudent = this.listOfStudent.map(stud => stud.ID === s.ID ? s : stud);
    }

  }


}
