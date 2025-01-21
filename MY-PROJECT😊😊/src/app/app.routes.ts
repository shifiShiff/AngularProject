import { Routes } from '@angular/router';
import { StudentListComponent } from '../component/student-list/student-list.component';
import { TemplateDrivenFormsComponent } from "../component/template-driven-forms/template-driven-forms.component";
import { IconsFromTextComponent } from "../component/icons-from-text/icons-from-text.component";
import { ReactiveFormComponent } from '../component/reactive-form/reactive-form.component';
import { ShowCoursesComponent } from '../component/show-courses/show-courses.component';
import { APIComponent } from '../component/api/api.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { LoginComponent } from '../component/login/login/login.component';
import { authGuard } from '../guards/auth.guard';
import { UserDetailsComponent } from '../component/user-details/user-details.component';

export const routes: Routes = [
    {path:'courses', component:StudentListComponent},
    {path:'forms', component:TemplateDrivenFormsComponent},
    {path:'icons', component:IconsFromTextComponent},
    {path:'teachers', component:ReactiveFormComponent},
    {path:'showCourses', component:ShowCoursesComponent},
    {path:'events', component:APIComponent},
    {path:'dashboard', component:DashboardComponent, canActivate:[authGuard]},
    {path:'login', component:LoginComponent},
    {path:'allUsers/:userid', component:UserDetailsComponent},
    
];
