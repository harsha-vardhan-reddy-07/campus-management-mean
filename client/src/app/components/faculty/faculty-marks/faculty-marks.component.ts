import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-marks',
  templateUrl: './faculty-marks.component.html',
  styleUrls: ['./faculty-marks.component.css']
})
export class FacultyMarksComponent implements OnInit{

  constructor(private http: HttpClient){}

  semester: string = '';
  examType: string = '';
  subject: string = '';

  subjects: any[] = [];

  subjectOptions: any[] = [];

  students: any[] = [];

  department = localStorage.getItem('department');

  marks: any = {};

  ngOnInit(): void {
      this.fetchSubjects();
  }


  fetchSubjects(){
    this.http.get<any>('http://localhost:6001/fetch-subjects').subscribe(
      (response:any)=>{
        console.log(response);
        this.subjects = response;
      }
    )
  }


  semesterChange(sem: any){
    const subjectOps = this.subjects.filter((subject: any)=> subject.semester === sem.target.value && subject.department === localStorage.getItem('department'));

    if (subjectOps.length > 0){
      this.subjectOptions = subjectOps[0].subjects;

    }

  }


  fetchStudents(){
    this.http.get<any>('http://localhost:6001/fetch-students').subscribe(
      (response:any)=>{
        console.log(response);
        this.students = [];
        const filteredStudents = response.filter((stu: any)=> stu.semester === this.semester && stu.branch === this.department);
        filteredStudents.map((student: any)=> this.students.push(student.studentId));
        console.log(this.students);
      }
    )
  }


  submitMarks(){
    this.http.post<any>('http://localhost:6001/add-marks', {semester: this.semester, department: this.department, examType: this.examType, subject: this.subject, marks: this.marks}).subscribe(
      (response:any)=>{
        alert("Marks added!!");
        this.students = [];
        this.semester = '';
        this.examType = '';
        this.subject = '';
      }, (error)=>{
        alert("Operation failed!!");
      }
    )
  }




}
