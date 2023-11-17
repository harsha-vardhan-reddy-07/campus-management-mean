import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-timetable',
  templateUrl: './student-timetable.component.html',
  styleUrls: ['./student-timetable.component.css']
})
export class StudentTimetableComponent implements OnInit{

  timetable: any = null;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
      this.fetchTimetable(localStorage.getItem('semester'), localStorage.getItem('branch'))
  }

  fetchTimetable(sem: any, dep: any){
    this.http.post<any>('http://localhost:6001/fetch-timetable-custom', {semester: sem, department: dep}).subscribe(
      (response: any)=>{
        this.timetable = response.timetableUrl;
      }, (error)=>{
        console.log('timetable not found');
      }
    )
  }

}
