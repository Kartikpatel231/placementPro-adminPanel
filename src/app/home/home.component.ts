import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigateToCompany(){
    this.router.navigate(['/company']);
  }
  navigateToCompanyList(){
    this.router.navigate(['/company-list']);
  }
  navigateToStudent(){
    this.router.navigate(['/student',150]);
  }
  navigateToStudentList(){
    this.router.navigate(['/student-list']);
  }
  navigateToStudentApproval(){
    this.router.navigate(['/status']);
  }
  navigateToStudentStatus(){
    this.router.navigate(['university/Detail'])
  }
  navigateToStudentPlacment(){
    this.router.navigate(['/placmentUpdate'])
  }
}
