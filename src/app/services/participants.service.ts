import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participant } from '../interfaces/participant.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ParticipantsService {
  private apiUrl = `${environment.apiBaseUrl}${environment.participants}`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.apiUrl);
  }

  save(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(this.apiUrl, participant);
  }
}
