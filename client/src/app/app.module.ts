import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { StudentNavComponent } from './components/student/student-nav/student-nav.component';
import { StudentTimetableComponent } from './components/student/student-timetable/student-timetable.component';
import { StudentNoticeComponent } from './components/student/student-notice/student-notice.component';
import { StudentMarksComponent } from './components/student/student-marks/student-marks.component';
import { FacultyHomeComponent } from './components/faculty/faculty-home/faculty-home.component';
import { FacultyStudentInfoComponent } from './components/faculty/faculty-student-info/faculty-student-info.component';
import { FacultyMarksComponent } from './components/faculty/faculty-marks/faculty-marks.component';
import { FacultyTimetableComponent } from './components/faculty/faculty-timetable/faculty-timetable.component';
import { FacultyNoticeComponent } from './components/faculty/faculty-notice/faculty-notice.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminStudentComponent } from './components/admin/admin-student/admin-student.component';
import { AdminFacultyComponent } from './components/admin/admin-faculty/admin-faculty.component';
import { AdminNoticeComponent } from './components/admin/admin-notice/admin-notice.component';
import { AdminTimetableComponent } from './components/admin/admin-timetable/admin-timetable.component';
import { AdminSubjectComponent } from './components/admin/admin-subject/admin-subject.component';
import { AdminNavComponent } from './components/admin/admin-nav/admin-nav.component';
import { FacultyNavComponent } from './components/faculty/faculty-nav/faculty-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminAddStudentComponent } from './components/admin/admin-add-student/admin-add-student.component';
import { AdminAddFacultyComponent } from './components/admin/admin-add-faculty/admin-add-faculty.component';
import { AdminUpdateStudentComponent } from './components/admin/admin-update-student/admin-update-student.component';
import { AdminUpdateFacultyComponent } from './components/admin/admin-update-faculty/admin-update-faculty.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AuthenticationComponent,
    StudentHomeComponent,
    StudentNavComponent,
    StudentTimetableComponent,
    StudentNoticeComponent,
    StudentMarksComponent,
    FacultyHomeComponent,
    FacultyStudentInfoComponent,
    FacultyMarksComponent,
    FacultyTimetableComponent,
    FacultyNoticeComponent,
    AdminHomeComponent,
    AdminStudentComponent,
    AdminFacultyComponent,
    AdminNoticeComponent,
    AdminTimetableComponent,
    AdminSubjectComponent,
    AdminNavComponent,
    FacultyNavComponent,
    AdminAddStudentComponent,
    AdminAddFacultyComponent,
    AdminUpdateStudentComponent,
    AdminUpdateFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
