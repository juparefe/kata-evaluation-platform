import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Judge } from '../interfaces/judge.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JudgesService {
  private apiUrl = `${environment.apiBaseUrl}${environment.judges}`;
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<Judge[]> {
    return this.http.get<Judge[]>(this.apiUrl);
  }

  save(judge: Judge): Observable<Judge> {
    return this.http.post<Judge>(this.apiUrl, judge);
  }
}
