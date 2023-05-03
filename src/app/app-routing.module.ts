import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// welcome
import {IndexComponent} from './view/welcome/index/index.component';
import {LoginComponent} from './view/welcome/login/login.component';
import {RegistrationComponent} from "./view/welcome/registration/registration.component";
import {CookiesComponent} from "./view/welcome/cookies/cookies.component";
// cabinet
import {CabinetComponent} from "./view/auth/cabinet/cabinet.component";
//404
import {Page404Component} from "./view/welcome/page404/page404.component";

const routes: Routes = [
  // welcome
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'cookies', component: CookiesComponent},
  // cabinet
  {path: 'auth/cabinet', component: CabinetComponent},
  //404
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
