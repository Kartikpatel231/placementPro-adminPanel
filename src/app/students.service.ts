import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseUrl='http://localhost:8080';
  constructor(private http:HttpClient) { }
  getStudentById(studentId:number):Observable<any>{
      const url=`${this.baseUrl}/api/v1/get/profile/${studentId}`;
      return this.http.get(url);
  }
  getAllStudentData(){
    const url=`${this.baseUrl}/api/v1/getAll/student`;
    return this.http.get(url);
  }
  searchStudentByEnrollment(studentEnrollment:string){
    const url=`${this.baseUrl}/api/v1/get/profile/enroll/${studentEnrollment}`;
    return this.http.get(url);
  }

}
