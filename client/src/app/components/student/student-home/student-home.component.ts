import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  constructor(private http: HttpClient){}

  student: any = null;

  ngOnInit(): void {

    this.fetchstudent(localStorage.getItem('userId'));
      
  }

  fetchstudent(id: any){

    this.http.get<any>(`http://localhost:6001/fetch-student/${id}`).subscribe(
      (responose: any) =>{
        this.student = responose;
      }
    )
  }

}
