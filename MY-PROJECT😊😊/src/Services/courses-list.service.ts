import { Injectable } from '@angular/core';
import { Course, ESubject } from '../modals/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesListService {

  // constructor() { }

  private Courses=[
    new Course(1, "Computer",ESubject.Computer),
    new Course(2, "Graphic", ESubject.Graphic),
    new Course(3, "History", ESubject.History),
    new Course(4, "Math", ESubject.Math),
    new Course(4, "Math", ESubject.Math),
    new Course(4, "Math", ESubject.Math),
    new Course(4, "Math", ESubject.Math),
    new Course(4, "Math", ESubject.Math)
  ]

  getCourses(){
    return this.Courses;
  }

}
