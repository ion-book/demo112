import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    public http: HttpClient
  ) {}

  getAll(){
    return this.http.get('https://randomuser.me/api/?results=10');
  }

}
