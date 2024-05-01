import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Define the getUserDetails method to fetch details for a specific user
  getUserDetails(userId: number): Observable<any> {
    return this.http.get<any>(`https://reqres.in/api/users/${userId}`);
  }

  // Define a method to fetch all user details
  getAllUsers(): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users');
  }
}
