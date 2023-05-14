import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {SessionService} from "../../../api/main/session.service";
import {SignService} from "../../../api/main/sign.service";
import {UserService} from "../../../api/service/user.service";
import {SignInModel} from "../../../api/model/sign.in.model";
import {ErrorModel} from "../../../api/main/error.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  errorModel!: ErrorModel;

  constructor(private signService: SignService,
              private sessionService: SessionService,
              private userService: UserService,
              private cookieService: CookieService,
              private router: Router) {
    this.sessionService.checkCookies();
    this.sessionService.checkLogin();
  }

  ngOnInit(): void {
  }

  signIn(): void {
    this.signService.signIn(new SignInModel(this.username, this.password)).subscribe({
      next: (answer1) => {
        if (answer1 !== undefined && answer1.login == this.username) {
          this.sessionService.setToken(answer1.token);
          this.userService.me().subscribe({
            next: (answer2) => {
              if (answer2 !== undefined) {
                this.sessionService.setLogin(answer2.login);
                // редирект на страницу http://localhost/auth/cabinet/
                this.router.navigateByUrl('auth/cabinet');
              }
            },
            error: (fault2) => {
              this.errorModel = new ErrorModel(fault2.error.error, [], fault2.error.error_description, fault2.status);
            }
          });
        }
      },
      error: (fault1) => {
        this.errorModel = new ErrorModel(fault1.error.error, [], fault1.error.error_description, fault1.status);
      }
    });
  }
}
