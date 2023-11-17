import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-notice',
  templateUrl: './admin-notice.component.html',
  styleUrls: ['./admin-notice.component.css']
})
export class AdminNoticeComponent implements OnInit{

  newNoticeOpen: boolean = false;

  notices: any = null;

  title: string = '';
  description: string = '';

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

  addNewNotice = () =>{
    this.http.post<any>('http://localhost:6001/new-notice', {title: this.title, description: this.description}).subscribe(
      (response: any)=>{

        this.title = '';
        this.description = '';
        alert("New notice posted!!");
        this.newNoticeOpen = false;

      }, (error)=>{
        alert("Operation failed!!");
      }
    )
  }


}
