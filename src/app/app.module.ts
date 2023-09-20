import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyManagementComponent } from './company-management/company-management.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from './company.service';
import { CompanyListComponent } from './company-list/company-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StatusApprovalComponent } from './status-approval/status-approval.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { GptComponent } from './gpt/gpt.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { UniversityDetailsListComponent } from './university-details-list/university-details-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyManagementComponent,
    CompanyListComponent,
    StudentComponent,
    StudentListComponent,
    StatusApprovalComponent,
    
    GptComponent,
    UniversityDetailsComponent,
    UniversityDetailsListComponent,
    
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatCheckboxModule, // Include MatCheckboxModule
    MatInputModule, // Include MatInputModule
    MatFormFieldModule, // Include MatFormFieldModule
    MatButtonModule, // Include MatButtonModule
    MatSelectModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
