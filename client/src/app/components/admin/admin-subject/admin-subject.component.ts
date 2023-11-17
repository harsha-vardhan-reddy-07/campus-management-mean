import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-subject',
  templateUrl: './admin-subject.component.html',
  styleUrls: ['./admin-subject.component.css']
})
export class AdminSubjectComponent {


  constructor(private http: HttpClient, private router: Router){}

  addSubjectOpen: boolean = false;

  subjects: any = null;

  semester: string = '';
  department: string = '';

  newSemester: string = '';
  newDepartment: string = '';
  newSubject: string = '';

  addNewSubject = () =>{
    this.http.post<any>('http://localhost:6001/new-subject', {newSemester: this.newSemester, newDepartment: this.newDepartment, newSubject: this.newSubject}).subscribe(
      (response: any)=>{

        this.newSemester = '';
        this.newDepartment = '';
        this.newSubject = '';
        alert("New subject added!!");
        this.addSubjectOpen = false;


      }, (error)=>{
        alert("Operation failed!!");
      }
    )
  }


  fetchSubjects = () =>{
    this.http.post<any>('http://localhost:6001/fetch-subjects-custom', {semester: this.semester, department: this.department}).subscribe(
      (response: any)=>{

        this.subjects = response;
        console.log(response);

      }, (error)=>{
        alert("no subjects found!!");
      }
    ) 
  }


  removeSubject = (subject: any) =>{
    this.http.post<any>('http://localhost:6001/remove-subject', {semester: this.semester, department: this.department, subject: subject}).subscribe(
      (response: any)=>{

        alert("Subject removed!!");
        this.fetchSubjects();

      }, (error)=>{
        alert("operation failed!!");
      }
    ) 
  }

}
