import {Injectable} from "@angular/core";
import {UserRegistrationModel} from "../../model/user.registration.model";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../main/api.service";
import {TokenModel} from "../../model/token.model";
import {SignInModel} from "../../model/sign.in.model";

@Injectable({providedIn: 'root'})
export class SignService {

  constructor(private httpClient: HttpClient,
              private apiService: ApiService) {
  }

  // registration
  signUp(userRegistrationModel: UserRegistrationModel) {
    return this.httpClient.post<TokenModel>(this.apiService.getApiOpen + '/registration', userRegistrationModel);
  }

  // login
  signIn(signInModel: SignInModel) {
    return this.httpClient.post<TokenModel>(this.apiService.getApiOpen + '/login', signInModel);
  }
}
