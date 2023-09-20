import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyManagementComponent } from './company-management/company-management.component';
import { GptComponent } from './gpt/gpt.component';
//import { UserDatamodulModule } from './home/user-datamodul/user-datamodul.module';
import { StatusApprovalComponent } from './status-approval/status-approval.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';


const routes: Routes = [
  //{path:'',redirectTo: '/app', pathMatch:'full'},
 // {path:'app',component:AppComponent},
  {path:'company',component:CompanyManagementComponent},
  {path:'company-list',component:CompanyListComponent},
  {path:'student/:id',component:StudentComponent},
  {path:'student-list',component:StudentListComponent},
  {path:'student/:enroll',component:StudentComponent},
  {path:'status',component:StatusApprovalComponent},
  //{path: 'home', loadChildren: () => import('./home/user-datamodul/user-datamodul.module').then(m => m.UserDatamodulModule)},
  {path:'gpt',component:GptComponent},
  {path:'university/Detail',component:UniversityDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
