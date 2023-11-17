import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-home',
  templateUrl: './faculty-home.component.html',
  styleUrls: ['./faculty-home.component.css']
})
export class FacultyHomeComponent implements OnInit{

  constructor(private http: HttpClient){}

  faculty: any = null;

  ngOnInit(): void {

    this.fetchFaculty(localStorage.getItem('userId'));
      
  }

  fetchFaculty(id: any){

    this.http.get<any>(`http://localhost:6001/fetch-faculty/${id}`).subscribe(
      (responose: any) =>{
        this.faculty = responose;
      }
    )
  }

}
