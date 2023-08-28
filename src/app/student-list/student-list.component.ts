import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StudentsService } from '../students.service';
import { Student } from './students-list';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:any=[];
  constructor(private studentService:StudentsService,private router:Router) { }

  ngOnInit() {
    this.getAllStudents();
  }
  getAllStudents(){
    this.studentService.getAllStudentData().subscribe(
      response=>{
          this.students=response;
          console.log(response);
      }
    )
  }
  viewStudentDetails(studentId:number){
    this.router.navigate(['/student',studentId]);
  }

}
