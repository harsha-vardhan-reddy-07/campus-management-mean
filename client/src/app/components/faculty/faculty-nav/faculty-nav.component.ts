import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-nav',
  templateUrl: './faculty-nav.component.html',
  styleUrls: ['./faculty-nav.component.css']
})
export class FacultyNavComponent {

  constructor(private route: Router){}

  logout(){
    localStorage.clear();
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        localStorage.removeItem(key);
      }
    }
    this.route.navigate(['/']);
  }

}
