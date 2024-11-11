export class Student{
    constructor(public ID:number,
         public firstName:string,
         public lastName:string ,
         public address:string,
          public phone:string|null,
          public isActive:Boolean|null,
          public dateOfLeave:Date| null,
          public avgMarks:number
           ){
            

    }
}