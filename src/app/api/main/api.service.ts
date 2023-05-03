import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor() {
  }

  get getApiRoot(): string {
    return environment.apiRootUrl;
  }

  get getApiAuth(): string {
    return environment.apiAuthUrl;
  }

  get getApiUser(): string {
    return environment.apiUserUrl;
  }

  get getApiOpen(): string {
    return environment.apiOpenUrl;
  }
}
