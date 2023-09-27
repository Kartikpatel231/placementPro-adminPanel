import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataserService } from './user-dataser.service';
import { UserData } from './userData'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  submitted = false;
  constructor(private userDataser:UserDataserService,private router:Router){

  }
  ngOnInit(): void {
  }

  
  



  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      const userData: UserData = {
        userName: this.loginForm.get('userName').value,
        password: this.loginForm.get('password').value
      };
      //const userName = this.loginForm.get('userName').value;
      //const password = this.loginForm.get('password').value;
      this.userDataser.Register(userData).subscribe(data=>{
       console.log(data);
      if (data ==="successfuly login") {
        this.router.navigate(['/home']); // Navigate to the home page

        this.userDataser.login();
        
         // Set authentication status to true
     //   this.userDataser.isAuthenticatedUser(true);
      }
      });
      
   

      // Reset the form
      this.loginForm.reset();
    }
  }

}
