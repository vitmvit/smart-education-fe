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
import {CabinetMyPageComponent} from './view/include/page/cabinet-my-page/cabinet-my-page.component';
import {CabinetComponent} from './view/auth/cabinet/cabinet.component';
import {CabinetMenuRootComponent} from './view/include/role/root/cabinet-menu-root/cabinet-menu-root.component';
import {CabinetMenuAdminComponent} from './view/include/role/admin/cabinet-menu-admin/cabinet-menu-admin.component';
import {CabinetAdminPageComponent} from './view/include/role/admin/cabinet-admin-page/cabinet-admin-page.component';
// 404
import {Page404Component} from './view/welcome/page404/page404.component';

import {
  CabinetMenuSupervisorComponent
} from './view/include/role/supervisor/cabinet-menu-supervisor/cabinet-menu-supervisor.component';
import {
  CabinetMenuTeacherComponent
} from './view/include/role/teacher/cabinet-menu-teacher/cabinet-menu-teacher.component';
import {
  CabinetMenuStudentLeadComponent
} from './view/include/role/student-lead/cabinet-menu-student-lead/cabinet-menu-student-lead.component';
import {
  CabinetMenuStudentComponent
} from './view/include/role/student/cabinet-menu-student/cabinet-menu-student.component';
import {CabinetGroupPageComponent} from './view/include/page/cabinet-group-page/cabinet-group-page.component';
import {CabinetStatePageComponent} from './view/include/page/cabinet-state-page/cabinet-state-page.component';
import {
  CabinetNotificationPageComponent
} from './view/include/page/cabinet-notification-page/cabinet-notification-page.component';

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
    CabinetMenuRootComponent,
    CabinetMenuAdminComponent,
    CabinetAdminPageComponent,
    CabinetMenuSupervisorComponent,
    CabinetMenuTeacherComponent,
    CabinetMenuStudentLeadComponent,
    CabinetMenuStudentComponent,
    CabinetGroupPageComponent,
    // 404
    Page404Component,
    CabinetStatePageComponent,
    CabinetNotificationPageComponent
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
