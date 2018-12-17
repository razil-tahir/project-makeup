import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Makeup} from '../app/makeup/makeup.model';

@Injectable()
export class MakeupService {

  constructor(private http: HttpClient) {
  }

  findMakeup(): Observable<Makeup[]> {
    return this.http.get<Makeup[]>('https://makeup-api.herokuapp.com/api/v1/products.json');
  }

  findMakeupById(id: number): Observable<Makeup> {
    return this.http.get<Makeup>('https://makeup-api.herokuapp.com/api/v1/products/' + id + '.json');
  }
}
