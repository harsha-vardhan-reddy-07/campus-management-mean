import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent {

  constructor(private router: Router, private http: HttpClient){}

  student: any = null;

  studentId: string = '';

  


  searchStudent = () =>{
    this.http.get<any>(`http://localhost:6001/fetch-student-with-sid/${this.studentId}`).subscribe(
      (response: any)=>{
        this.student = response;
        console.log(response);

      }, (error)=>{
        alert("Student not found!! try again..")
      }
    )
  }

}
