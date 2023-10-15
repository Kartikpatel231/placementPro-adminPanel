import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlacementStudentEntity } from './placed-student-update/PlacementStudentEntity';

@Injectable({
  providedIn: 'root'
})
export class PlacedstudentsService {

  private baseUrl='http://localhost:8080';
  constructor(private http:HttpClient) { }

  sendStatusDatas(data:any):Observable<any>{
    const url = `${this.baseUrl}/api/v6/update/placement/${data.enrollmentNumber}/v/${data.company}/v1/${data.status}`;

    // Use the data parameter as the request body
    return this.http.post<boolean>(url, data);
  }
  // placedstudents.service.ts

getAllPlacedStudents(): Observable<PlacementStudentEntity[]> {
  const url = `${this.baseUrl}/api/v6/getAll/placedStudent`;
  return this.http.get<PlacementStudentEntity[]>(url);
}
// placedstudents.service.ts

getPlacementStudentsByCompanyName(name: string): Observable<PlacementStudentEntity[]> {
  const url = `${this.baseUrl}/api/v6/get/${name}`;
  return this.http.get<PlacementStudentEntity[]>(url);
}

}
