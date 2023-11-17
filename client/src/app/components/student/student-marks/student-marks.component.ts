import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})
export class StudentMarksComponent implements OnInit {

  constructor(private http: HttpClient){}

  marks: any = null;

  transformedMarks: any[] = [];

  userId = localStorage.getItem('userId')

  studentId : string = '';

  student: any = null;

  ngOnInit(): void {
      this.fetchStudentDetails(localStorage.getItem('userId'));
      
  }

  fetchStudentDetails(id: any){
    this.http.get<any>(`http://localhost:6001/fetch-student/${id}`).subscribe(
      (responose: any) =>{
        this.student = responose;
        this.studentId = responose.studentId;

        this.fetchMarks();
      }
    )
  }

  fetchMarks(){
    this.http.get<any>(`http://localhost:6001/fetch-marks`).subscribe(
      (responose: any) =>{
        this.marks = responose;

        this.marks.map((mark: any)=> this.transformedMarks.push([mark.examType, mark.subject, mark.marks[this.studentId]]));

        console.log(this.transformedMarks);

      }
    )
  }


}
