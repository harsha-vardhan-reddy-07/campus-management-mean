import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-notice',
  templateUrl: './student-notice.component.html',
  styleUrls: ['./student-notice.component.css']
})
export class StudentNoticeComponent implements OnInit{

  notices: any = null;

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(): void {
      this.fetchNotices();
  }

  fetchNotices = () =>{
    this.http.get<any>('http://localhost:6001/fetch-notices').subscribe(
      (response: any)=>{

        this.notices = response.reverse();

      }, (error)=>{
        console.log(error);
      }
    )
  }

}
