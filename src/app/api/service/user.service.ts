import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiService} from "../main/api.service";
import {UserModel} from "../model/user.model";
import {SessionService} from "../main/session.service";

@Injectable({providedIn: "root"})
export class UserService {

  constructor(private httpClient: HttpClient,
              private apiService: ApiService,
              private sessionService: SessionService) {
  }

  // isExist(login: string): Observable<boolean> {
  //   return this.httpClient.get<boolean>(this.apiService.getApiAuth + "/users/isExist?login=" + login);
  // }
  //
  me(): Observable<UserModel> {
    return this.httpClient.get<UserModel>(
      this.apiService.getApiUser + "/users/me",
      this.sessionService.getHeaderToken()
    );
  }

  findAllTeachers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(
      this.apiService.getApiAuth + "/users/teachers",
      this.sessionService.getHeaderToken()
    );
  }

  findAllByGroupId(groupId: number): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(
      this.apiService.getApiAuth + "/users/group?groupId=" + groupId,
      this.sessionService.getHeaderToken()
    );
  }

  findAllByGroupName(groupName: string): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(
      this.apiService.getApiUser + "/users/group?groupName=" + groupName,
      this.sessionService.getHeaderToken()
    );
  }

  //
  // findOneById(id: bigint): Observable<UserModel> {
  //   return this.httpClient.get<UserModel>(
  //     this.apiService.getApiAuth + "/users/one?id=" + id,
  //     this.headerService.getHeaderJsonToken()
  //   );
  // }
  //
  // findOneByLogin(login: string): Observable<UserModel> {
  //   return this.httpClient.get<UserModel>(
  //     this.apiService.getApiAuth + "/users/one?login=" + login,
  //     this.headerService.getHeaderJsonToken()
  //   );
  // }
  //
  // findAll(): Observable<UserModel[]> {
  //   return this.httpClient.get<UserModel[]>(
  //     this.apiService.getApiAuth + "/users/all",
  //     this.headerService.getHeaderJsonToken()
  //   );
  // }
  //
  // findAllRoles(): Observable<RoleModel[]> {
  //   return this.httpClient.get<UserModel[]>(
  //     this.apiService.getApiAuth + "/users/roles/all",
  //     this.headerService.getHeaderJsonToken()
  //   );
  // }
}
