import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { PlacedstudentsService } from '../placedstudents.service';
import { PlacementStudentEntity } from './PlacementStudentEntity';

@Component({
  selector: 'app-placed-student-update',
  templateUrl: './placed-student-update.component.html',
  styleUrls: ['./placed-student-update.component.css']
})
export class PlacedStudentUpdateComponent implements OnInit {
  companies: any[] = [];
  students: PlacementStudentEntity[] = [];
  searchStudentId: any;
  selectedCompany: string | null = null;

  constructor(private companyService: CompanyService, private router: Router, private placedService: PlacedstudentsService) {}

  ngOnInit() {
    this.getCompanies();
    this.getAllPlacedStudents(); // Load all students by default
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

  getAllPlacedStudents() {
    this.selectedCompany = null; // Reset the selected company
    this.placedService.getAllPlacedStudents().subscribe(
      (students: PlacementStudentEntity[]) => {
        this.students = students;
      },
      (error) => {
        console.error('Error fetching placement students:', error);
      }
    );
  }

  filterByCompanyName(companyName: string) {
    this.selectedCompany = companyName;
    this.placedService.getPlacementStudentsByCompanyName(companyName).subscribe(
      (students: PlacementStudentEntity[]) => {
        this.students = students;
      },
      (error) => {
        console.error(`Error fetching placement students for company ${companyName}:`, error);
      }
    );
  }
}
