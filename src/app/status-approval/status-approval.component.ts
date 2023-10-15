import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-status-approval',
  templateUrl: './status-approval.component.html',
  styleUrls: ['./status-approval.component.css']
})
export class StatusApprovalComponent implements OnInit {
  companies: any[] = [];
  students:any=[];
  constructor(private companyService:CompanyService,private router:Router) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getAllCompanies().subscribe(
      (response: any) => {
        this.companies = response;
      },
      (error) => {
        console.error('Error fetching companies:', error);
      }
    );
  }
  sendStatus(){
    const selectedStatus = (document.getElementById('status') as HTMLSelectElement).value;
    const selectedCompany = (document.getElementById('company') as HTMLSelectElement).value;

    // Construct the data to send
    const data = {
      status: selectedStatus,
      company: selectedCompany
    };
    this.companyService.sendStatusData(data).subscribe(
      (response) => {
        this.students=response;
        console.log(response);
        console.log('Status sent successfully:', response);
        // Handle success, e.g., show a success message
      },
      (error) => {
        console.error('Error sending status:', error);
        // Handle error, e.g., show an error message
      }
    );    

  }
  viewStudentDetails(studentId:number){
    this.router.navigate(['/student',studentId]);
  }
  exportToExcel() {
    const data: any[] = [];
  
    for (const student of this.students) {
      // const studentData: any = {
      //   'Full Name': student.fullName,
      //   'Gender': student.gender,
      //   'Status': student.status,
      //   // Add more fields as needed
      // };
      const studentData: any = {
        'Student ID': student.studentId,
        'Full Name': student.fullName,
        'Gender': student.gender,
        'Status': student.status,
        'Father Name': student.studentProfileEntity.fatherName,
        'Mother Name': student.studentProfileEntity.motherName,
        'Mobile Number': student.studentProfileEntity.mobileNumber,
        'Category': student.studentProfileEntity.category,
        'Date of Birth': student.studentProfileEntity.dateOfBirth,
        'Address': student.studentProfileEntity.address1,
        'Blood Group': student.studentProfileEntity.bloodGroup,
        'Enrollment Number': student.studentProfileEntity.enrollementNumber,
        'Zipcode': student.studentProfileEntity.zipcode,
        'Image Path': student.studentProfileEntity.imagePath,
        'University Name': student.universityDetailEntity.universityName,
        'Tenth Marks': student.universityDetailEntity.tenthMarks,
        'Twelfth Marks': student.universityDetailEntity.twelfthMarks,
        'CGPA': student.universityDetailEntity.cgpa,
        'SGPA': student.universityDetailEntity.sgpa,
        'Current Year': student.universityDetailEntity.currentYear,
        'Current Semester': student.universityDetailEntity.currentSemester,
        'Number of Backlogs': student.universityDetailEntity.numberOfBacklogs,
        'Course': student.universityDetailEntity.course,
        'Section': student.universityDetailEntity.section,
        'Batches': student.universityDetailEntity.batches,
        'Passing Year': student.universityDetailEntity.passingYear,
        // Add more fields as needed
      };
      
      data.push(studentData);
    }
  
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Student List');
  
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(blob, 'student-list.xlsx');
  }
  
}
