import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiService} from "../../main/api.service";
import {HeaderService} from "./header.service";
import {TokenModel} from "../../model/token.model";
import {UserRegistrationModel} from "../../model/user.registration.model";
import {SignInModel} from "../../model/sign.in.model";

@Injectable({providedIn: 'root'})
export class SignService {

  constructor(private httpClient: HttpClient,
              private apiService: ApiService,
              private headerService: HeaderService) {
  }

  // registration
  signUp(userRegistrationModel: UserRegistrationModel): Observable<TokenModel> {
    return this.httpClient.post<TokenModel>(
      this.apiService.getApiOpen + '/registration', userRegistrationModel //, this.headerService.getHeader()
    );
  }

  // login
  signIn(signInModel: SignInModel): Observable<TokenModel> {
    return this.httpClient.post<TokenModel>(
      this.apiService.getApiOpen + '/login', signInModel //, this.headerService.getHeader()
    );
  }
}
