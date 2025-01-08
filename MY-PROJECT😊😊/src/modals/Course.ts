

export enum ESubject {
    Computer="Computer",
    Graphic="Graphic",
    Math="Math",
    History="History"
  }

export class Course{
   
   

    constructor(
            public IdCourses:number,
            public NameCourses: String,
            public Subject:ESubject
            // public lessons:string[]| null
            

    ) {}

}