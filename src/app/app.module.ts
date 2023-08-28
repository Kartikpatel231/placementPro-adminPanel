import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyManagementComponent } from './company-management/company-management.component';
import { FormsModule } from '@angular/forms';
import { CompanyService } from './company.service';
import { CompanyListComponent } from './company-list/company-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StatusApprovalComponent } from './status-approval/status-approval.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyManagementComponent,
    CompanyListComponent,
    StudentComponent,
    StudentListComponent,
    StatusApprovalComponent
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
