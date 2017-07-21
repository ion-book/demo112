import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    public http: Http
  ) {}

  getAll(){
    return this.http.get('https://randomuser.me/api/?results=10')
    .map(response => response.json());
  }

}
