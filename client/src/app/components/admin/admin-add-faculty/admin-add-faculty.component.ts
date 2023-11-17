import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-faculty',
  templateUrl: './admin-add-faculty.component.html',
  styleUrls: ['./admin-add-faculty.component.css']
})
export class AdminAddFacultyComponent {

  constructor(private http: HttpClient, private router: Router ){}

  name: string = '';
  employeeId: string = '';
  employeeImg: string = '';
  department: string = '';
  designation: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';


  addFaculty = () =>{

    this.http.post<any>('http://localhost:6001/add-faculty',{name: this.name, employeeId: this.employeeId, 
                              employeeImg: this.employeeImg, department: this.department, designation: this.designation, 
                              email: this.email, mobile: this.mobile, password: this.password}).subscribe(
      (response: any)=>{
        alert("faculty details added!!");
        this.name = '';
        this.employeeId = '';
        this.employeeImg = '';
        this.department = '';
        this.designation = '';
        this.email = '';
        this.mobile = '';
        this.password = '';

        this.router.navigate(['/admin']);

      }, (error)=>{

        alert("Operation failed!! please try again");

    }
  )

  }


}
