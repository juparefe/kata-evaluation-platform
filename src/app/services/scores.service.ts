import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Score } from '../interfaces/score.interface';
import { Observable } from 'rxjs';
import { Result } from '../interfaces/result.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private apiUrl = `${environment.apiBaseUrl}${environment.scores}`;
  private summaryUrl = `${environment.apiBaseUrl}${environment.summary}`;
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<Result[]> {
      return this.http.get<Result[]>(this.apiUrl);
  }

  getSummary(): Observable<Result[]> {
    return this.http.get<Result[]>(this.summaryUrl);
  }

  save(score: Score): Observable<Score> {
    return this.http.post<Score>(this.apiUrl, score);
  }
}
