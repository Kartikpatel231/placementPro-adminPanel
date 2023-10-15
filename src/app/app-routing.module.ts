import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyManagementComponent } from './company-management/company-management.component';
import { GptComponent } from './gpt/gpt.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/authGuard.service';
import { LoginComponent } from './login/login.component';
import { PlacedStudentUpdateComponent } from './placed-student-update/placed-student-update.component';
//import { UserDatamodulModule } from './home/user-datamodul/user-datamodul.module';
import { StatusApprovalComponent } from './status-approval/status-approval.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';


const routes: Routes = [
  {path:'',redirectTo: '/login', pathMatch:'full'},
 // {path:'app',component:AppComponent},
 {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'placmentUpdate',component:PlacedStudentUpdateComponent},
  {path:'company',component:CompanyManagementComponent,canActivate:[AuthGuard]},
  {path:'company-list',component:CompanyListComponent,canActivate:[AuthGuard]},
  {path:'student/:id',component:StudentComponent,canActivate:[AuthGuard]},
  {path:'student-list',component:StudentListComponent,canActivate:[AuthGuard]},
  {path:'student/:enroll',component:StudentComponent,canActivate:[AuthGuard]},
  {path:'status',component:StatusApprovalComponent,canActivate:[AuthGuard]},
  //{path: 'home', loadChildren: () => import('./home/user-datamodul/user-datamodul.module').then(m => m.UserDatamodulModule)},
  {path:'gpt',component:GptComponent,canActivate:[AuthGuard]},
  {path:'university/Detail',component:UniversityDetailsComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
