import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // readonly APIUrl="http://localhost:57291/api";
  // readonly PhotoUrl="http://localhost:57291/Photos/";

  readonly APIUrl="http://mrinmayee-001-site1.dtempurl.com/api";
  readonly PhotoUrl="http://mrinmayee-001-site1.dtempurl.com/Photos/";
  

  constructor(private http:HttpClient) { }

  getCourseList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/course');
  }
  addCourse(val:any){
    return this.http.post(this.APIUrl+'/Course',val);
  }
  updateCourse(val:any){
    return this.http.put(this.APIUrl+'/Course',val);
  }

  deleteCourse(val:any){
    return this.http.delete(this.APIUrl+'/Course/'+val);
  }

  getStudentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Student');
  }

  addStudent(val:any){
    return this.http.post(this.APIUrl+'/Student',val);
  }

  updateStudent(val:any){
    return this.http.put(this.APIUrl+'/Student',val);
  }

  deleteStudent(val:any){
    return this.http.delete(this.APIUrl+'/Student/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Student/SaveFile',val);
  }

  getAllCourseNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Student/GetAllCourseNames');
  }
}
