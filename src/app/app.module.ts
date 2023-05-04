import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// app
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
// welcome
import {IndexComponent} from './view/welcome/index/index.component';
import {LoginComponent} from './view/welcome/login/login.component';
import {RegistrationComponent} from './view/welcome/registration/registration.component';
import {CookiesComponent} from './view/welcome/cookies/cookies.component';
// cabinet
import {CabinetMenuComponent} from './view/include/cabinet-menu/cabinet-menu.component';
import {CabinetMyPageComponent} from './view/include/page-content/cabinet-my-page/cabinet-my-page.component';
import {CabinetComponent} from './view/auth/cabinet/cabinet.component';
import {CabinetRootMenuComponent} from './view/include/menu-content/cabinet-root-menu/cabinet-root-menu.component';
import {CabinetAdminMenuComponent} from './view/include/menu-content/cabinet-admin-menu/cabinet-admin-menu.component';
// 404
import {Page404Component} from './view/welcome/page404/page404.component';

import {
  CabinetSupervisorMenuComponent
} from './view/include/menu-content/cabinet-supervisor-menu/cabinet-supervisor-menu.component';
import {
  CabinetTeacherMenuComponent
} from './view/include/menu-content/cabinet-teacher-menu/cabinet-teacher-menu.component';
import {
  CabinetStudentLeadMenuComponent
} from './view/include/menu-content/cabinet-student-lead-menu/cabinet-student-lead-menu.component';
import {
  CabinetStudentMenuComponent
} from './view/include/menu-content/cabinet-student-menu/cabinet-student-menu.component';
import {CabinetGroupPageComponent} from './view/include/page-content/cabinet-group-page/cabinet-group-page.component';
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
import {CabinetUserMenuComponent} from './view/include/menu-content/cabinet-user-menu/cabinet-user-menu.component';

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
    CabinetMyPageComponent,
    CabinetComponent,
    CabinetRootMenuComponent,
    CabinetAdminMenuComponent,
    CabinetSupervisorMenuComponent,
    CabinetTeacherMenuComponent,
    CabinetStudentLeadMenuComponent,
    CabinetStudentMenuComponent,
    CabinetGroupPageComponent,
    CabinetUserMenuComponent,
    // 404
    Page404Component,
    CabinetStatePageComponent,
    CabinetNotificationPageComponent,
    CabinetAttendancePageComponent,
    CabinetAttendanceStatePageComponent,
    CabinetCreateEditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
