import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManageTeamService {
  constructor(private http: HttpClient) {}
  readonly manageURL = 'https://localhost:44395/api/ManageTeam';
  readonly PhotoURL = 'https://localhost:44395/Photos/';
  data: any;
  total: number;
  GetAllTeam(): Observable<any> {
    return this.http.get(this.manageURL);
  }
  refreshList() {
    this.GetAllTeam().subscribe((res) => {
      this.data = res;
      this.total = res.length;
    });
  }
  CreateTeam(data: any) {
    return this.http.post(this.manageURL, data);
  }
}
