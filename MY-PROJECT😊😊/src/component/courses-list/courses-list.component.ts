import { Component, NgModule } from '@angular/core';
import { Course } from '../../modals/Course';
import { CoursesListService } from '../../Serices/courses-list.service';
import { CorsesStyleDirective } from '../../directives/corses-style.directive';





@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CorsesStyleDirective],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})


export class CoursesListComponent {

  studen_courses: Course[];
  Mylist: Course[];

  constructor(private ServiceCourses: CoursesListService) {
    this.Mylist = ServiceCourses.getCourses();
    this.studen_courses = [];
  }

  addCourse(event: Event) {

    const selectElement = event.target as HTMLSelectElement;
    const selectedId = selectElement.value;
    const selectedCourse = this.Mylist.find(course => course.IdCourses.toString() == selectedId)

    if (selectedCourse) {
      let i = this.studen_courses.findIndex(c => c.IdCourses == selectedCourse.IdCourses)

      if (i == -1) {
        this.studen_courses.push(selectedCourse)
      }
      else {
        this.studen_courses = this.studen_courses.filter(c => c.IdCourses != selectedCourse.IdCourses)
      }
    }
  }

}
