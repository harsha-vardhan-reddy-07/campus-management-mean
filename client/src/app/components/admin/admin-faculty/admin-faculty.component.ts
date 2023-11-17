import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-faculty',
  templateUrl: './admin-faculty.component.html',
  styleUrls: ['./admin-faculty.component.css']
})
export class AdminFacultyComponent{

  constructor(private router: Router, private http: HttpClient){}

  faculty: any = null;

  facultyId: string = '';

  


  searchFaculty = () =>{
    this.http.get<any>(`http://localhost:6001/fetch-faculty-with-eid/${this.facultyId}`).subscribe(
      (response: any)=>{
        this.faculty = response;
        console.log(response);

      }, (error)=>{
        alert("Employee not found!! try again..")
      }
    )
  }




}
