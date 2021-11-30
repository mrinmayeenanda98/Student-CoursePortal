import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  constructor(private service:SharedService) { }

  StudentList:any=[];

  ModalTitle:string="";
  ActivateAddEditStudentComp:boolean=false;
  student:any;

  ngOnInit(): void {
    this.refreshStudentList();
  }

  addClick(){
    this.student={
      StudentId:0,
      StudentName:"",
      Course:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Student";
    this.ActivateAddEditStudentComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.student=item;
    // this.student={
    //   StudentId:item.StudentId,
    //   StudentName:item.StudentName,
    //   Course:item.Course,
    //   DateOfJoining:item.DateOfJoining,
    //   PhotoFileName:item.PhotoFileName
    // }
    this.ModalTitle="Edit Student";
    this.ActivateAddEditStudentComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteStudent(item.StudentId).subscribe(data=>{
        alert(data.toString());
        this.refreshStudentList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditStudentComp=false;
    this.refreshStudentList();
  }


  refreshStudentList(){
    this.service.getStudentList().subscribe(data=>{
      this.StudentList=data;
    });
  }

}
