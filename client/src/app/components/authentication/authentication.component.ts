import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  authType: string = 'login';
  username: string = '';
  email: string = '';
  password: string = '';
  usertype: string = '';

  details: {} = {};

  constructor(private http: HttpClient, private route: Router){ }

  register(){

    this.details = {username: this.username, email: this.email, password: this.password};
    this.http.post('http://localhost:6001/register', this.details).subscribe(
        (response:any) =>{
          localStorage.setItem('userId', response._id);
          localStorage.setItem('username', response.name);
          localStorage.setItem('email', response.email);
          localStorage.setItem('usertype', response.usertype);
          this.username = '';
          this.email = '';
          this.password='';
          this.usertype = '';

          if (response.usertype === 'student'){
            this.route.navigate(['/student']);
          }else if(response.usertype === 'faculty'){
            this.route.navigate(['/faculty']);
          }else if(response.usertype === 'admin'){
            this.route.navigate(['/admin']);
          }
        },
        (error) => {
          console.error(error);
          alert("Authentication failed!!");
        }
    )
  }

  login(){
    
    this.details = {email: this.email, password: this.password, usertype: this.usertype};
    
    this.http.post('http://localhost:6001/login', this.details).subscribe(
        (response:any) =>{
          localStorage.setItem('userId', response._id);
          localStorage.setItem('username', response.name);
          localStorage.setItem('email', response.email);
          localStorage.setItem('usertype', response.usertype);
          this.username = '';
          this.email = '';
          this.password='';
          this.usertype = '';

          if (response.usertype === 'student'){

            localStorage.setItem('semester', response.semester);
            localStorage.setItem('branch', response.branch);
            this.route.navigate(['/student']);

          }else if(response.usertype === 'faculty'){

            localStorage.setItem('department', response.department);
            this.route.navigate(['/faculty']);
            
          }else if(response.usertype === 'admin'){
            this.route.navigate(['/admin']);
          }
        },
        (error: any) => {
          console.error(error);
          alert("Authentication failed!!");
        }
    )
  }

}
