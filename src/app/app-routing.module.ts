import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// welcome
import {IndexComponent} from './view/welcome/index/index.component';
import {LoginComponent} from './view/welcome/login/login.component';
import {RegistrationComponent} from "./view/welcome/registration/registration.component";
import {CookiesComponent} from "./view/welcome/cookies/cookies.component";
// cabinet
import {CabinetMyProfileComponent} from "./view/auth/cabinet/cabinet-my-profile/cabinet-my-profile.component";
import {CabinetMyGroupComponent} from "./view/auth/cabinet/cabinet-my-group/cabinet-my-group.component";
import {CabinetMyStatisticsComponent} from "./view/auth/cabinet/cabinet-my-statistics/cabinet-my-statistics.component";
//404
import {Page404Component} from "./view/welcome/page404/page404.component";
import {
  CabinetGroupAttendanceComponent
} from "./view/auth/cabinet/cabinet-group-attendance/cabinet-group-attendance.component";
import {
  CabinetStudentsStatisticsComponent
} from "./view/auth/cabinet/cabinet-students-statistics/cabinet-students-statistics.component";
import {
  CabinetMyNotificationComponent
} from "./view/auth/cabinet/cabinet-my-notification/cabinet-my-notification.component";

const routes: Routes = [
  // welcome
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'cookies', component: CookiesComponent},
  // cabinet
  {path: 'auth', component: CabinetMyProfileComponent},
  {path: 'auth/cabinet', component: CabinetMyProfileComponent},
  {path: 'auth/cabinet/my/profile', component: CabinetMyProfileComponent},
  {path: 'auth/cabinet/my/page', component: CabinetMyProfileComponent},
  {path: 'auth/cabinet/my/group', component: CabinetMyGroupComponent},
  {path: 'auth/cabinet/my/statistics', component: CabinetMyStatisticsComponent},
  {path: 'auth/cabinet/group/attendance', component: CabinetGroupAttendanceComponent},
  {path: 'auth/cabinet/group/statistics', component: CabinetStudentsStatisticsComponent},
  {path: 'auth/cabinet/my/notification', component: CabinetMyNotificationComponent},
  //404
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
