import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-timetable',
  templateUrl: './faculty-timetable.component.html',
  styleUrls: ['./faculty-timetable.component.css']
})
export class FacultyTimetableComponent implements OnInit {

  constructor(private http: HttpClient){}

  timetables: any = null;

  displayTimetable: any = null;

  ngOnInit(): void {
    this.fetchTimetables();   
  }

  fetchTimetables(){
    this.http.get<any>('http://localhost:6001/fetch-timetables').subscribe(
      (response: any)=>{
        console.log(response)
        this.timetables = response;
        this.displayTimetable = response.filter((table: any)=> table.semester === 'semester 1' && table.department === localStorage.getItem('department'))[0];
        console.log(this.displayTimetable);
      }
    )
  }


  semesterChanged(sem: any){
    console.log(sem.target.value);
    this.displayTimetable = this.timetables.filter((table: any)=> table.semester === sem.target.value && table.department === localStorage.getItem('department'))[0];
    console.log(this.displayTimetable);
  }

}
