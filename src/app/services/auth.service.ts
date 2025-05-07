import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiBaseUrl}${environment.login}`;
    
  constructor(private http: HttpClient) {}

  login(body: Login): Observable<any> {
      return this.http.post<any>(this.apiUrl, body);
  }
}
