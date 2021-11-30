import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ShowCourseComponent } from './course/show-course/show-course.component';
import { AddEditCourseComponent } from './course/add-edit-course/add-edit-course.component';
import { StudentComponent } from './student/student.component';
import { ShowStudentComponent } from './student/show-student/show-student.component';
import { AddEditStudentComponent } from './student/add-edit-student/add-edit-student.component';
import { SharedService } from './shared.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ShowCourseComponent,
    AddEditCourseComponent,
    StudentComponent,
    ShowStudentComponent,
    AddEditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
