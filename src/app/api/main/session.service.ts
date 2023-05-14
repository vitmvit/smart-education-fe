import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiService} from "./api.service";
import {HeaderService} from "./header.service";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class SessionService {

  private check = "se_check";
  private token = "se_token";
  private login = "se_login";

  constructor(private cookieService: CookieService,
              private router: Router,
              private httpClient: HttpClient,
              private apiService: ApiService,
              private headerService: HeaderService) {
  }

  /**
   * проверка куков, если не удалось записать и считать
   * то редиректим на страницу предупреждения о необходимости кукис
   */
  checkCookies() {
    this.cookieService.set(this.check, this.check);
    if (this.cookieService.check(this.check)) {
      this.cookieService.delete(this.check);
    } else {
      this.router.navigateByUrl("/cookie");
    }
  }

  checkLogin() {
    if (!this.cookieService.check(this.login) || !this.cookieService.check(this.token)) {
      this.logOff();
    }
  }

  checkSession() {
    if (!this.cookieService.check(this.login) || !this.cookieService.check(this.token)) {
      this.logOff();
    }
    if (this.cookieService.check(this.login) && this.cookieService.check(this.token)) {
      this.checkCurrentLogin(this.cookieService.get(this.login)).subscribe(response => {
        if (!response) {
          this.logOff();
        }
      });
    }
  }

  //---

  getToken(): string {
    return this.getParam(this.token);
  }

  setToken(token: string): void {
    this.setParam(this.token, token);
  }

  getLogin(): string {
    return this.getParam(this.login);
  }

  setLogin(login: string): void {
    this.setParam(this.login, login);
  }

  //---

  logOff() {
    this.cookieService.delete(this.token);
    this.cookieService.delete(this.login);
    this.router.navigateByUrl("/login");
  }

  //---

  // @ts-ignore
  getParam(key: string): string {
    if (this.cookieService.check(key)) {
      return this.cookieService.get(key);
    } else {
      this.router.navigateByUrl("/login");
    }
  }

  setParam(key: string, value: string): void {
    this.cookieService.set(key, value);
    if (!this.cookieService.check(key)) {
      this.router.navigateByUrl("/cookie");
    }
  }

  checkCurrentLogin(login: string): Observable<boolean> {
    // @ts-ignore
    return this.httpClient.get<boolean>(
      this.apiService.getApiUser + "/users/current?login=" + login,
      this.getHeaderToken()
    );
  }

  getHeader(): object {
    return {
      headers: new HttpHeaders()
        .set("Accept", "*/*")
        .set("Content-type", "application/json; charset=utf-8")
        .set("Access-Control-Allow-Origin", "*")
        .set("Access-Control-Allow-Methods", "OPTIONS, POST, PUT, GET, DELETE, PATCH")
        .set("Access-Control-Allow-Headers", "*")
        .set("Access-Control-Allow-Credentials", "true")
    };
  }

  getHeaderToken(): object {
    return {
      headers: new HttpHeaders()
        // .set("Accept", "*/*")
        // .set("Content-type", "application/json; charset=utf-8")
        // .set("Access-Control-Allow-Origin", "*")
        // .set("Access-Control-Allow-Methods", "OPTIONS, POST, PUT, GET, DELETE, PATCH")
        // .set("Access-Control-Allow-Headers", "*")
        // .set("Access-Control-Allow-Credentials", "true")
        .set("Authorization", "Bearer " + this.getToken())
    };
  }
}
