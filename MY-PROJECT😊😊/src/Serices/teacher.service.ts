import { Injectable } from '@angular/core';
import { Teacher } from '../modals/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  // constructor() { }
  private Teachers=[
    new Teacher(111,"Sara" , ["v1","a2","d3"]),
    new Teacher(222,"Miriam",  ["b4","a3", "v2"]),
    new Teacher(333,"Ester", ["b4","a1", "v2"]),
    new Teacher(444,"Rachel", ["c4","a3", "v4"]),
  ]

  Add(t:Teacher){
    this.Teachers.push(t);
    console.log("Add");
  }
  Get(){
    return this.Teachers
  }
  Delete(teacher:Teacher){
    this.Teachers.filter(t=>t.Id !=teacher.Id)
    console.log("Delete")
  }

  Update(teacher:Teacher){
    this.Teachers.forEach(t=>{
      if(t.Id==teacher.Id){
        t.Name=teacher.Name;
        t.classes=teacher.classes
      }
    })
    console.log("Update");
    
  }
}
