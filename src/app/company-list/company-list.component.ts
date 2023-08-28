import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: any[] = [];
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
  deleteCompany(companyId: number): void {
    if (confirm('Are you sure you want to delete this company?')) {
      this.companyService.deleteCompany(companyId).subscribe(
        () => {
          // Remove the deleted company from the list
          this.companies = this.companies.filter(company => company.companyId !== companyId);
        },
        (error) => {
          console.error('Error deleting company:', error);
        }
      );
    }
  }
  editCompany(companyId: number) {
    // Navigate to the update page with the companyId as a route parameter and update mode query parameter
    this.router.navigate(['/company'], { queryParams: { companyId: companyId, mode: 'update' } });

  }
  
}
