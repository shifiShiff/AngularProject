import { Routes } from '@angular/router';
import { StudentListComponent } from '../component/student-list/student-list.component';
import { TemplateDrivenFormsComponent } from "../component/template-driven-forms/template-driven-forms.component";
import { IconsFromTextComponent } from "../component/icons-from-text/icons-from-text.component";
import { ReactiveFormComponent } from '../component/reactive-form/reactive-form.component';
import { ShowCoursesComponent } from '../component/show-courses/show-courses.component';

export const routes: Routes = [
    {path:'courses', component:StudentListComponent},
    {path:'forms', component:TemplateDrivenFormsComponent},
    {path:'icons', component:IconsFromTextComponent},
    {path:'teachers', component:ReactiveFormComponent},
    {path:'showCourses', component:ShowCoursesComponent}
];
