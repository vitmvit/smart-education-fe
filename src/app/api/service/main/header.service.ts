import {Injectable} from "@angular/core";
import {SessionService} from "../../main/session.service";
import {HttpHeaders} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class HeaderService {

  constructor(private sessionService: SessionService) {
  }

  getHeader(): object {
    return {
      headers: new HttpHeaders()
        .set('Accept', '*/*')
        .set('Content-type', 'application/json; charset=utf-8')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'OPTIONS, POST, PUT, GET, DELETE, PATCH')
        .set('Access-Control-Allow-Headers', "*")
        .set('Access-Control-Allow-Credentials', 'true')
    };
  }

  getHeaderJsonToken(): object {
    return {
      headers: new HttpHeaders()
        // .set('Accept', '*/*')
        // .set('Content-type', 'application/json; charset=utf-8')
        // .set('Access-Control-Allow-Origin', '*')
        // .set('Access-Control-Allow-Methods', 'OPTIONS, POST, PUT, GET, DELETE, PATCH')
        // .set('Access-Control-Allow-Headers', "*")
        // .set('Access-Control-Allow-Credentials', 'true')
        .set('Authorization', 'Bearer ' + this.sessionService.getToken())
    };
  }

  getHeaderToken(): object {
    return {
      headers: new HttpHeaders()
        // .set('Accept', '*/*')
        // .set('Content-type', 'application/json; charset=utf-8')
        // .set('Access-Control-Allow-Origin', '*')
        // .set('Access-Control-Allow-Methods', 'OPTIONS, POST, PUT, GET, DELETE, PATCH')
        // .set('Access-Control-Allow-Headers', "*")
        // .set('Access-Control-Allow-Credentials', 'true')
        .set('Authorization', 'Bearer ' + this.sessionService.getToken())
    };
  }
}
