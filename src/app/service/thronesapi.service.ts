import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class ThronesapiService {

  constructor(private http: HttpClient) { 

  }

  load(): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Characters');
  }
}
