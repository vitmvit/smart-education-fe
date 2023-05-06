import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {ApiService} from '../../main/api.service';
import {HeaderService} from "./header.service";
import {UserModel} from "../../model/user.model";

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private httpClient: HttpClient,
              private apiService: ApiService,
              private headerService: HeaderService) {
  }

  // isExist(login: string): Observable<boolean> {
  //   return this.httpClient.get<boolean>(this.apiService.getApiAuth + '/users/isExist?login=' + login);
  // }
  //
  me(): Observable<UserModel> {
    return this.httpClient.get<UserModel>(
      this.apiService.getApiUser + '/users/me',
      this.headerService.getHeaderToken()
    );
  }

  //
  // findOneById(id: bigint): Observable<UserModel> {
  //   return this.httpClient.get<UserModel>(
  //     this.apiService.getApiAuth + '/users/one?id=' + id,
  //     this.headerService.getHeaderJsonToken()
  //   );
  // }
  //
  // findOneByLogin(login: string): Observable<UserModel> {
  //   return this.httpClient.get<UserModel>(
  //     this.apiService.getApiAuth + '/users/one?login=' + login,
  //     this.headerService.getHeaderJsonToken()
  //   );
  // }
  //
  // findAll(): Observable<UserModel[]> {
  //   return this.httpClient.get<UserModel[]>(
  //     this.apiService.getApiAuth + '/users/all',
  //     this.headerService.getHeaderJsonToken()
  //   );
  // }
  //
  // findAllRoles(): Observable<RoleModel[]> {
  //   return this.httpClient.get<UserModel[]>(
  //     this.apiService.getApiAuth + '/users/roles/all',
  //     this.headerService.getHeaderJsonToken()
  //   );
  // }
}
