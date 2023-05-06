import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class SessionService {

  private check = 'se_check';
  private token = 'se_token';
  private login = 'se_login';

  constructor(private cookieService: CookieService,
              private router: Router) {
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
      this.router.navigateByUrl('/cookie');
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
    this.cookieService.delete(this.token);
    this.cookieService.delete(this.login);
    this.router.navigateByUrl('/login');
  }

  //---

  // @ts-ignore
  getParam(key: string): string {
    if (this.cookieService.check(key)) {
      return this.cookieService.get(key);
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  setParam(key: string, value: string): void {
    this.cookieService.set(key, value);
    if (!this.cookieService.check(key)) {
      this.router.navigateByUrl('/cookie');
    }
  }
}
