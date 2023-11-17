import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-student-info',
  templateUrl: './faculty-student-info.component.html',
  styleUrls: ['./faculty-student-info.component.css']
})
export class FacultyStudentInfoComponent {

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
