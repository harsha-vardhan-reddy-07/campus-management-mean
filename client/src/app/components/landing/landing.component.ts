import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
      if (localStorage.getItem('usertype') === 'admin'){
        this.router.navigate(['/admin']);
      }else if (localStorage.getItem('usertype') === 'faculty'){
        this.router.navigate(['/faculty']);
      }else if (localStorage.getItem('usertype') === 'student'){
        this.router.navigate(['/student']);
      }
  }

}
