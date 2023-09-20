import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversityData } from './university-details/UniversityData';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseUrl='http://localhost:8080';
  constructor(private http:HttpClient) { }
  getStudentById(studentId:number):Observable<any>{
      const url=`${this.baseUrl}/api/v1/get/profile/${studentId}`;
    //  this.getUniversityById(studentId);
      return this.http.get(url);
  }
  getUniversityById(studentId:number){
     const url=`${this.baseUrl}/api/v4/get/${studentId}`;
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
  deleteStudent(){
    
  }
  updateUniversityData(universityData: UniversityData): Observable<any> {
    const url = `${this.baseUrl}/api/v4`;
    let params = new HttpParams();
    if ( universityData.cgpa !==  undefined) {
    params = params.append('cgpa', universityData.cgpa.toString());
    }
    if (universityData.sgpa !==  undefined) {
      params = params.append('sgpa', universityData.sgpa.toString());
    }
    if (universityData.tenthMarks !==  undefined) {
    params = params.append('tenthMarks', universityData.tenthMarks.toString());
    }
    if ( universityData.twelfthMarks!==  undefined) {
    params = params.append('twelfthMarks', universityData.twelfthMarks.toString());
    }
    if(universityData.name!==undefined){
      params=params.append('name',universityData.name);
    }
    // Send the request with parameters
    return this.http.get(url,{ params });
  }
  }

