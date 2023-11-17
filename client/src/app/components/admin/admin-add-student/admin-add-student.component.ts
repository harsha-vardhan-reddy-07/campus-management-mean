import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-student',
  templateUrl: './admin-add-student.component.html',
  styleUrls: ['./admin-add-student.component.css']
})
export class AdminAddStudentComponent {

  constructor(private http: HttpClient, private router: Router ){}

  name: string = '';
  studentId: string = '';
  studentImg: string = '';
  branch: string = '';
  semester: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';


  addStudent = () =>{

    this.http.post<any>('http://localhost:6001/add-student',{name: this.name, studentId: this.studentId, 
                              studentImg: this.studentImg, branch: this.branch, semester: this.semester, 
                              email: this.email, mobile: this.mobile, password: this.password}).subscribe(
      (response: any)=>{
        alert("Student details added!!");
        this.name = '';
        this.studentId = '';
        this.studentImg = '';
        this.branch = '';
        this.semester = '';
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
