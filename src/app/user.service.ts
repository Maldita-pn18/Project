import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from './Information';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Info[]>(this.apiUrl)
  }

  deleteUser(id){
    return this.http.delete(this.apiUrl + "/:" ,id)
  }
  editUser(Drive, id){
    return this.http.put(`${this.apiUrl}/${id}`,Drive)
  }
  viewData(id){
    return this.http.get(`${this.apiUrl}/${id}`)

  }
}