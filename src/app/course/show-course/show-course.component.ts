import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})
export class ShowCourseComponent implements OnInit {

  constructor(private service:SharedService) { }

  CourseList:any=[];

  ModalTitle: string="";
  ActivateAddEditCourseComp:boolean=false;
  course:any;

  CourseIdFilter:string="";
  CourseNameFilter:string="";
  CourseListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCourseList();
  }

  addClick(){
    this.course={
      CourseId:0,
      CourseName:""
    }
    this.ModalTitle="Add Course";
    this.ActivateAddEditCourseComp=true;

  }

   editClick(item:any){
     this.course=item;
     this.ModalTitle="Edit Course";
     this.ActivateAddEditCourseComp=true;
   }

   deleteClick(item:any){
     if(confirm('Are you sure??')){
       this.service.deleteCourse(item.CourseId).subscribe(data=>{
         alert(data.toString());
         this.refreshCourseList();
       })
     }
   }

  closeClick(){
    this.ActivateAddEditCourseComp=false;
    this.refreshCourseList();
  }


  refreshCourseList(){
    this.service.getCourseList().subscribe(data=>{
      this.CourseList=data;
      this.CourseListWithoutFilter=data;
    });
  }

   FilterFn(){
     var CourseIdFilter = this.CourseIdFilter;
     var CourseNameFilter = this.CourseNameFilter;

     this.CourseList = this.CourseListWithoutFilter.filter(function (el:any){
         return el.CourseId.toString().toLowerCase().includes(
           CourseIdFilter.toString().trim().toLowerCase()
         )&&
         el.CourseName.toString().toLowerCase().includes(
           CourseNameFilter.toString().trim().toLowerCase()
         )
     });
   }

   sortResult(prop:any,asc:any){
     this.CourseList = this.CourseListWithoutFilter.sort(function(a:any,b:any){
       if(asc){
           return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
       }else{
         return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
       }
     })
   }

}