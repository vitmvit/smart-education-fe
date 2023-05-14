import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiService} from "../main/api.service";
import {SessionService} from "../main/session.service";
import {SubjectModel} from "../model/subject.model";

@Injectable({providedIn: "root"})
export class SubjectService {

  constructor(private httpClient: HttpClient,
              private apiService: ApiService,
              private sessionService: SessionService) {
  }

  findOneById(id: number): Observable<SubjectModel> {
    return this.httpClient.get<SubjectModel>(
      this.apiService.getApiAuth + "/subjects/id=" + id,
      this.sessionService.getHeaderToken()
    );
  }

  findOneByName(name: string): Observable<SubjectModel> {
    return this.httpClient.get<SubjectModel>(
      this.apiService.getApiAuth + "/subjects/name=" + name,
      this.sessionService.getHeaderToken()
    );
  }

  findAll(): Observable<SubjectModel[]> {
    return this.httpClient.get<SubjectModel[]>(
      this.apiService.getApiAuth + "/subjects/all",
      this.sessionService.getHeaderToken()
    );
  }

  save(subjectModel: SubjectModel): Observable<SubjectModel> {
    return this.httpClient.post<SubjectModel>(
      this.apiService.getApiAdmin + "/subjects",
      subjectModel,
      this.sessionService.getHeaderToken()
    );
  }

  remove(id: number) {
    return this.httpClient.delete(
      this.apiService.getApiAuth + "/subjects?id=" + id,
      this.sessionService.getHeaderToken()
    );
  }
}
