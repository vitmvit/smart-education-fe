import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {NgbDatepickerModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
// app
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
// welcome
import {IndexComponent} from './view/welcome/index/index.component';
import {LoginComponent} from './view/welcome/login/login.component';
import {RegistrationComponent} from './view/welcome/registration/registration.component';
import {CookiesComponent} from './view/welcome/cookies/cookies.component';
// cabinet
import {CabinetMenuComponent} from './view/include/menu/cabinet-menu/cabinet-menu.component';
import {CabinetStatePageComponent} from './view/include/page-content/cabinet-state-page/cabinet-state-page.component';
import {
  CabinetNotificationPageComponent
} from './view/include/page-content/cabinet-notification-page/cabinet-notification-page.component';
import {
  CabinetAttendancePageComponent
} from './view/include/page-content/cabinet-attendance-page/cabinet-attendance-page.component';
import {
  CabinetAttendanceStatePageComponent
} from './view/include/page-content/cabinet-attendance-state-page/cabinet-attendance-state-page.component';
import {
  CabinetCreateEditPageComponent
} from './view/include/page-content/cabinet-create-edit-page/cabinet-create-edit-page.component';
import {CabinetMenuStudentComponent} from './view/include/menu/cabinet-menu-student/cabinet-menu-student.component';
import {CabinetMyProfileComponent} from './view/auth/cabinet/cabinet-my-profile/cabinet-my-profile.component';
import {CabinetMyGroupComponent} from './view/auth/cabinet/cabinet-my-group/cabinet-my-group.component';
import {CabinetMyStatisticsComponent} from './view/auth/cabinet/cabinet-my-statistics/cabinet-my-statistics.component';
import {CabinetMenuRootComponent} from './view/include/menu/cabinet-menu-root/cabinet-menu-root.component';
import {CabinetMenuAdminComponent} from './view/include/menu/cabinet-menu-admin/cabinet-menu-admin.component';
import {
  CabinetMenuSupervisorComponent
} from './view/include/menu/cabinet-menu-supervisor/cabinet-menu-supervisor.component';
import {CabinetMenuTeacherComponent} from './view/include/menu/cabinet-menu-teacher/cabinet-menu-teacher.component';
import {
  CabinetMenuStudentLeadComponent
} from './view/include/menu/cabinet-menu-student-lead/cabinet-menu-student-lead.component';
import {CabinetMenuUserComponent} from './view/include/menu/cabinet-menu-user/cabinet-menu-user.component';
// 404
import {Page404Component} from './view/welcome/page404/page404.component';
import {
  CabinetGroupAttendanceComponent
} from './view/auth/cabinet/cabinet-group-attendance/cabinet-group-attendance.component';
import {
  CabinetStudentsStatisticsComponent
} from './view/auth/cabinet/cabinet-students-statistics/cabinet-students-statistics.component';
import {
  CabinetMyNotificationComponent
} from './view/auth/cabinet/cabinet-my-notification/cabinet-my-notification.component';
import {RouterModule} from "@angular/router";
import {ImageViewComponent} from './view/include/image-view/image-view.component';

@NgModule({
  declarations: [
    // app
    AppComponent,
    // welcome
    IndexComponent,
    LoginComponent,
    RegistrationComponent,
    CookiesComponent,
    // cabinet
    CabinetMenuComponent,
    CabinetStatePageComponent,
    CabinetNotificationPageComponent,
    CabinetAttendancePageComponent,
    CabinetAttendanceStatePageComponent,
    CabinetCreateEditPageComponent,
    CabinetMenuStudentComponent,
    CabinetMyProfileComponent,
    CabinetMyGroupComponent,
    CabinetMyStatisticsComponent,
    CabinetMenuRootComponent,
    CabinetMenuAdminComponent,
    CabinetMenuSupervisorComponent,
    CabinetMenuTeacherComponent,
    CabinetMenuStudentLeadComponent,
    CabinetMenuUserComponent,
    // 404
    Page404Component,
    CabinetGroupAttendanceComponent,
    CabinetStudentsStatisticsComponent,
    CabinetMyNotificationComponent,
    ImageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgbModule,
    NgbDatepickerModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
