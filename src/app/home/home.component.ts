import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataserService } from './user-dataser.service';
import { UserData } from './userData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  submitted = false;
  constructor(private userDataser:UserDataserService){

  }
  ngOnInit(): void {
    this.loadUsers();
  }
  users: UserData[] = [];
  userData=new UserData('','');
  userName
  register(){
    if (this.userData.userName && this.userData.userPassword){
      this.userDataser.Register(this.userData);
      this.userData=new UserData('','');
      this.loadUsers();
  }
}
  loadUsers() {
    this.users =this.userDataser.getUser();
  }



  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      const userName = this.loginForm.get('userName').value;
      const password = this.loginForm.get('password').value;

      // You can perform any actions with the entered username and password here
      console.log('Username: ' + userName);
      console.log('Password: ' + password);

      // Reset the form
      this.loginForm.reset();
    }
  }
}
