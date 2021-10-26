import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageTeamService {

  constructor(private http: HttpClient) { }
  readonly manageURL = "https://localhost:44395/api/ManageTeam";

  data: any
  GetAllTeam(): Observable<any>{
    return this.http.get(this.manageURL);
  }

  CreateTeam(data: any){
    return this.http.post(this.manageURL,data)
  }
  
}
