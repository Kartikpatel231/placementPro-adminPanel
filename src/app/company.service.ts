import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormData } from './company-management/company-management.component';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
   private baseUrl='http://localhost:8080';
  constructor(private http:HttpClient) { }

  createCompany(formData:FormData):Observable<any>{ 
     const url=`${this.baseUrl}/api/v1`;
     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
     return this.http.post(url,formData, httpOptions);
  }
  getCompanyById(companyId: number): Observable<any> {
    const url = `${this.baseUrl}api/v1/get/${companyId}`;
    return this.http.get(url);
  }
  getAllCompanies(): Observable<any> {
    const url = `${this.baseUrl}/api/v1`;
    return this.http.get(url);
  }
  deleteCompany(companyId: number): Observable<any> {
    const url = `${this.baseUrl}/api/v1/delete/${companyId}`;
    return this.http.post(url, null); // Sending an empty request body for delete
  }
  updateCompany(companyId: number, formData: FormData): Observable<any> {
    const url = `${this.baseUrl}api/v1/update`;
    formData.companyId = companyId; // Set the companyId in the request body
    return this.http.post(url, formData);
  }
  sendStatusData(data:any):Observable<any>{
    const url=`${this.baseUrl}/api/v3/${data.status}/approved/${data.company}?status=${data.status}`;
    return this.http.get<any>(url);
  }  
}
