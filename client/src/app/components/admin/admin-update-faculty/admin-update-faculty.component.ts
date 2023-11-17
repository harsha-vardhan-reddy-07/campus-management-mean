import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-faculty',
  templateUrl: './admin-update-faculty.component.html',
  styleUrls: ['./admin-update-faculty.component.css']
})
export class AdminUpdateFacultyComponent implements OnInit {

  faculty: any = null;

  paramId: string = '';

  name: string = '';
  employeeId: string = '';
  employeeImg: string = '';
  department: string = '';
  designation: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private paramsRoute: ActivatedRoute){}
  ngOnInit(): void {
      
    const param :any = this.paramsRoute.snapshot.paramMap;
    this.paramId = param.params['id'];

    this.fetchFaculty(param.params['id']);
  }

  fetchFaculty = (id: any) =>{
    this.http.get<any>(`http://localhost:6001/fetch-faculty/${id}`).subscribe(
      (response: any)=>{
        this.faculty = response;
        console.log(response);

        
        this.name = response.name;
        this.employeeId = response.employeeId;
        this.employeeImg = response.employeeImg;
        this.department = response.department;
        this.designation = response.designation;
        this.email = response.email;
        this.mobile = response.mobile;
        this.password = response.password;

      }, (error)=>{
        alert("Faculty not found!! try again..")
      }
    )
  }


  updateFaculty = ()=>{
    this.http.post<any>(`http://localhost:6001/update-faculty/${this.paramId}`,{name: this.name, employeeId: this.employeeId, 
                              employeeImg: this.employeeImg, department: this.department, designation: this.designation, 
                              email: this.email, mobile: this.mobile, password: this.password}).subscribe(
      (response: any)=>{
        alert("faculty details updated!!");
        this.name = '';
        this.employeeId = '';
        this.employeeImg = '';
        this.department = '';
        this.designation = '';
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
