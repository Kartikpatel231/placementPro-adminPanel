import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';


export interface FormData{
  companyId:number;
  name:string;
  description:string;
  website:string;
  registration:string;
}
@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.css']
})

export class CompanyManagementComponent implements OnInit {
  companies: any[] = [];
  showSuccessMessage: boolean;
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
  formData:FormData={
    companyId: 0,
    name: '',
    description: '',
    website: '',
    registration:'',
  };
  onSubmit():void{
    console.log(this.formData);
    this.companyService.createCompany(this.formData).subscribe(response=>{
      console.log('Company created',response);
    this.showSuccessMessage = true;

    },
    error=>{
      console.log('Error creating company:',error);
    });

    // Navigate after a certain time (e.g., 3 seconds)
    setTimeout(() => {
    this.router.navigate(['/company-list']);    
      
    }, 3000);
  }
  
  }




