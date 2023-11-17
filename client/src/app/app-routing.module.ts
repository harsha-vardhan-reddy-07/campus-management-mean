import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { StudentMarksComponent } from './components/student/student-marks/student-marks.component';
import { StudentNoticeComponent } from './components/student/student-notice/student-notice.component';
import { StudentTimetableComponent } from './components/student/student-timetable/student-timetable.component';
import { FacultyHomeComponent } from './components/faculty/faculty-home/faculty-home.component';
import { FacultyMarksComponent } from './components/faculty/faculty-marks/faculty-marks.component';
import { FacultyNoticeComponent } from './components/faculty/faculty-notice/faculty-notice.component';
import { FacultyStudentInfoComponent } from './components/faculty/faculty-student-info/faculty-student-info.component';
import { FacultyTimetableComponent } from './components/faculty/faculty-timetable/faculty-timetable.component';
import { AdminFacultyComponent } from './components/admin/admin-faculty/admin-faculty.component';
import { AdminStudentComponent } from './components/admin/admin-student/admin-student.component';
import { AdminNoticeComponent } from './components/admin/admin-notice/admin-notice.component';
import { AdminSubjectComponent } from './components/admin/admin-subject/admin-subject.component';
import { AdminTimetableComponent } from './components/admin/admin-timetable/admin-timetable.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminAddStudentComponent } from './components/admin/admin-add-student/admin-add-student.component';
import { AdminAddFacultyComponent } from './components/admin/admin-add-faculty/admin-add-faculty.component';
import { AdminUpdateStudentComponent } from './components/admin/admin-update-student/admin-update-student.component';
import { AdminUpdateFacultyComponent } from './components/admin/admin-update-faculty/admin-update-faculty.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'authenticate', component: AuthenticationComponent},

  {path: 'student', component: StudentHomeComponent},
  {path: 'student-marks', component: StudentMarksComponent},
  {path: 'student-notice', component: StudentNoticeComponent},
  {path: 'student-timetable', component: StudentTimetableComponent},

  {path: 'faculty', component: FacultyHomeComponent},
  {path: 'faculty-marks', component: FacultyMarksComponent},
  {path: 'faculty-notice', component: FacultyNoticeComponent},
  {path: 'faculty-student-info', component: FacultyStudentInfoComponent},
  {path: 'faculty-timetable', component: FacultyTimetableComponent},

  {path: 'admin', component: AdminHomeComponent},
  {path: 'admin-faculty-info', component: AdminFacultyComponent},
  {path: 'admin-student-info', component: AdminStudentComponent},
  {path: 'admin-notice', component: AdminNoticeComponent},
  {path: 'admin-subject', component: AdminSubjectComponent},
  {path: 'admin-timetable', component: AdminTimetableComponent},

  {path: 'admin-add-student', component: AdminAddStudentComponent},
  {path: 'admin-add-faculty', component: AdminAddFacultyComponent},

  {path: 'admin-update-student/:id', component: AdminUpdateStudentComponent},
  {path: 'admin-update-faculty/:id', component: AdminUpdateFacultyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
