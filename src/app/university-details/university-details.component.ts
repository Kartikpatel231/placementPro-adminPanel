import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { UniversityData } from './UniversityData';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent implements OnInit {

  constructor(private studentService:StudentsService) { }
  universityData: UniversityData = new UniversityData();
  sendCGPA: boolean = false ;
  sendSGPA: boolean = false;
  sendTenthMarks: boolean = false;
  sendTwelfthMarks: boolean = false;


  selectAll: boolean = false; // Initialize to false
  // ...

  toggleAllSelection() {
    // Toggle the selection state of all checkboxes
    this.sendCGPA = this.selectAll;
    this.sendSGPA = this.selectAll;
    this.sendTenthMarks = this.selectAll;
    this.sendTwelfthMarks = this.selectAll;
  }
  // Define a function to send selected data to the backend
  updateUniversity() {
      // Create a new object to hold only the selected data
      const selectedData: UniversityData = new UniversityData();
      if (this.sendCGPA) {
          selectedData.cgpa = this.universityData.cgpa;
      }
      if (this.sendSGPA) {
          selectedData.sgpa = this.universityData.sgpa;
      }
      if (this.sendTenthMarks) {
          selectedData.tenthMarks = this.universityData.tenthMarks;
      }
      if (this.sendTwelfthMarks) {
          selectedData.twelfthMarks = this.universityData.twelfthMarks;
      }

      this.studentService.updateUniversityData(selectedData).subscribe(
          response => {
              // Handle the response from the backend
              console.log('Update successful', response);
          },
          error => {
              // Handle any errors
              console.error('Update failed', error);
          }
      );
  }
  ngOnInit() {
  }

}
