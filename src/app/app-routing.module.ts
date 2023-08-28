import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyManagementComponent } from './company-management/company-management.component';
import { StatusApprovalComponent } from './status-approval/status-approval.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {path:'company',component:CompanyManagementComponent},
  {path:'company-list',component:CompanyListComponent},
  {path:'student/:id',component:StudentComponent},
  {path:'student-list',component:StudentListComponent},
  {path:'student/:enroll',component:StudentComponent},
  {path:'status',component:StatusApprovalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
