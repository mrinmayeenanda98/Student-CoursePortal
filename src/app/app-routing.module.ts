import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'student',component:StudentComponent},
  {path:'course',component:CourseComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
