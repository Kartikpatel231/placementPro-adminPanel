import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'placementProAdmin-panel';

    constructor(private router:Router){}
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
    actions=[{
         route:"/home",title:"home","icon":"house"
    },
    {
      route:"/gpt",title:"gpt","icon":"person"
 }
    
  ]
  addKartik(){
   console.log('kartik');   
  }
  handleRoute(action:any){
      this.router.navigateByUrl(action.route);
  }
}
