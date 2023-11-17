import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{

  constructor(private router: Router, private http: HttpClient){}

  studentsCount: number = 0;
  facultyCount: number = 0;
  subjectsCount: number = 0;
  noticeCount: number = 0;

  ngOnInit(): void {

    this.fetchStudents();
    this.fetchFaculty();
    this.fetcSubjects();
    this.fetchNotices();
      
  }


  fetchStudents = () =>{

    this.http.get<any>('http://localhost:6001/fetch-students').subscribe(
      (response: any)=>{
        this.studentsCount = response.length;
        console.log(response);
      }
    )

  }

  fetchFaculty = () =>{
    this.http.get<any>('http://localhost:6001/fetch-faculty').subscribe(
      (response: any)=>{
        this.facultyCount = response.length;
        console.log(response);
      }
    )
  }

  fetcSubjects = () =>{
    this.http.get<any>('http://localhost:6001/fetch-subjects').subscribe(
      (response: any)=>{
        this.subjectsCount = response.length;
        console.log(response);
      }
    )
  }

  fetchNotices = () =>{
    this.http.get<any>('http://localhost:6001/fetch-notices').subscribe(
      (response: any)=>{
        this.noticeCount = response.length;
        console.log(response);
      }
    )
  }   

}
