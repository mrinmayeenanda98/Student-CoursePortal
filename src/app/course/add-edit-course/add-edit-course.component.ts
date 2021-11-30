import { Component, OnInit , Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.css']
})
export class AddEditCourseComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() course:any;
  CourseId:string="";
  CourseName:string="";

  ngOnInit(): void {
    this.CourseId=this.course.CourseId;
    this.CourseName=this.course.CourseName;
  }

  
  addCourse(){
    var val = {CourseId:this.CourseId,
      CourseName:this.CourseName};
    this.service.addCourse(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCourse(){
    var val = {CourseId:this.CourseId,
      CourseName:this.CourseName};
    this.service.updateCourse(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
