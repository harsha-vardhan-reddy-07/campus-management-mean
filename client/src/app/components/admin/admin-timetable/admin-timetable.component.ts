import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-timetable',
  templateUrl: './admin-timetable.component.html',
  styleUrls: ['./admin-timetable.component.css']
})
export class AdminTimetableComponent {

  updateTimetableOpen: boolean = false;
  
  constructor(private http: HttpClient, private router: Router){}

  timetable: any = null;

  semester: string = '';
  department: string = '';

  newSemester: string = '';
  newDepartment: string = '';
  newtimetable: string = '';

  updatetimetable = () =>{
    this.http.post<any>('http://localhost:6001/new-timetable', {newSemester: this.newSemester, newDepartment: this.newDepartment, newtimetable: this.newtimetable}).subscribe(
      (response: any)=>{

        this.newSemester = '';
        this.newDepartment = '';
        this.newtimetable = '';
        alert("New timetable added!!");
        this.updateTimetableOpen = false;


      }, (error)=>{
        alert("Operation failed!!");
      }
    )
  }


  fetchtimetable = () =>{
    this.http.post<any>('http://localhost:6001/fetch-timetable-custom', {semester: this.semester, department: this.department}).subscribe(
      (response: any)=>{

        this.timetable = response;
        console.log(response);

      }, (error)=>{
        alert("no timetables found!!");
        this.timetable= null;
      }
    ) 
  }


  
}
