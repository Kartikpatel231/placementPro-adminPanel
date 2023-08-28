import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    studentProfile:any;
    studentId:number;
    studentEnrollment:string;
    searchStudentId:any;
  constructor(private studentService:StudentsService,
    private routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.paramMap.subscribe(params=>{
      this.studentId =+params.get('id');
      this.getStudent();
      this.searchStudent();
    })
  }
  getStudent(){
   this.studentService.getStudentById(this.studentId).subscribe(
    response=>{
       this.studentProfile=response;
    }) 
  }  
  searchStudent(){
      if (this.searchStudentId) {
        if (isNaN(Number(this.searchStudentId))) {
          this.studentService.searchStudentByEnrollment(this.searchStudentId)
            .subscribe(response => {
              this.studentProfile = response;
            });
        } else {
          this.studentService.getStudentById(this.searchStudentId)
            .subscribe(response => {
              this.studentProfile = response;
            });
        }
      }
    }
  
  
  }
