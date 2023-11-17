import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-student',
  templateUrl: './admin-update-student.component.html',
  styleUrls: ['./admin-update-student.component.css']
})
export class AdminUpdateStudentComponent implements OnInit {

  student: any = null;

  paramId: string = '';

  name: string = '';
  studentId: string = '';
  studentImg: string = '';
  branch: string = '';
  semester: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private paramsRoute: ActivatedRoute){}
  ngOnInit(): void {
      
    const param :any = this.paramsRoute.snapshot.paramMap;
    this.paramId = param.params['id'];

    this.fetchstudent(param.params['id']);
  }

  fetchstudent = (id: any) =>{
    this.http.get<any>(`http://localhost:6001/fetch-student/${id}`).subscribe(
      (response: any)=>{
        this.student = response;
        console.log(response);
        
        this.name = response.name;
        this.studentId = response.studentId;
        this.studentImg = response.studentImg;
        this.branch = response.branch;
        this.semester = response.semester;
        this.email = response.email;
        this.mobile = response.mobile;
        this.password = response.password;

      }, (error)=>{
        alert("student not found!! try again..")
      }
    )
  }


  updatestudent = ()=>{
    this.http.post<any>(`http://localhost:6001/update-student/${this.paramId}`,{name: this.name, studentId: this.studentId, 
                              studentImg: this.studentImg, branch: this.branch, semester: this.semester, 
                              email: this.email, mobile: this.mobile, password: this.password}).subscribe(
      (response: any)=>{
        alert("student details updated!!");
        this.name = '';
        this.studentId = '';
        this.studentImg = '';
        this.branch = '';
        this.semester = '';
        this.email = '';
        this.mobile = '';
        this.password = '';

        this.router.navigate(['/admin']);

      }, (error)=>{

        alert("Operation failed!! please try again");

      }
    )
  }

}

