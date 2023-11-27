import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ConferenciasDetail } from './conferenciasDetail';
import { Conferencias } from './conferencias';

@Injectable({
  providedIn: 'root'
})
export class ConferenciasService {

  private apiUrl = environment.baseUrl + '/conferencias';

  constructor(private http: HttpClient) { }

  getConferencias(): Observable<Conferencias[]> {
    return this.http.get<Conferencias[]>(this.apiUrl);
  }

}
