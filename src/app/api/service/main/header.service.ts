import {Injectable} from "@angular/core";
import {SessionService} from "../../main/session.service";
import {HttpHeaders} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class HeaderService {

  constructor(private sessionService: SessionService) {
  }

  getHeaderJson(): object {
    return {
      headers: new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-type', 'application/json; charset=utf-8')
    };
  }

  getHeaderJsonToken(): object {
    return {
      headers: new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-type', 'application/json; charset=utf-8')
        // .set('Authorization', 'Bearer ' + this.sessionService.getToken())
        .set('"x-csrf-token', this.sessionService.getToken())
    };
  }

  getHeaderToken(): object {
    return {
      headers: new HttpHeaders()
        .set('Accept', '*/*')
        // .set('Authorization', 'Bearer ' + this.sessionService.getToken())
        .set('"x-csrf-token', this.sessionService.getToken())
    };
  }
}
