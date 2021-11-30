import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() student:any;
  StudentId:string="";
  StudentName:string="";
  Course:string="";
  DateOfJoining:string="";
  PhotoFileName:string="";
  PhotoFilePath:string="";

  CoursesList:any=[];

  ngOnInit(): void {
    //this.StudentName=this.course.CourseName;
    this.loadCourseList();
  }

   loadCourseList(){
     this.service.getAllCourseNames().subscribe((data:any)=>{
       this.CoursesList=data;

       this.StudentId=this.student.StudentId;
       this.StudentName=this.student.StudentName;
       this.Course=this.student.Course;
       this.DateOfJoining=this.student.DateOfJoining;
       this.PhotoFileName=this.student.PhotoFileName;
       this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
     });
   }

  addStudent(){
    var val = {StudentId:this.StudentId,
        StudentName:this.StudentName,
                Course:this.Course,
              DateOfJoining:this.DateOfJoining,
            PhotoFileName:this.PhotoFileName};

    this.service.addStudent(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateStudent(){
    console.log("suchi",this.StudentId)
    var val = {StudentId:this.StudentId,
      StudentName:this.StudentName,
      Course:this.Course,
    DateOfJoining:this.DateOfJoining,
  PhotoFileName:this.PhotoFileName};

    this.service.updateStudent(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }


}
