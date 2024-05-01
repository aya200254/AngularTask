import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];

  constructor(private http: HttpClient, private router: Router,public loadingService: LoadingService) { }

  ngOnInit(): void {
    this.fetchUserData(1);
  }

  fetchUserData(page: number): void {
    this.loadingService.setLoading(true); 
    this.http.get<any>(`https://reqres.in/api/users?page=${page}`).subscribe(
      (response) => {
        this.users = response.data;
        this.filteredUsers = this.users;
        this.loadingService.setLoading(false); 
      },
      (error) => {
        console.error('Error fetching user data:', error);
        this.loadingService.setLoading(false); 
      }
    );
  }

  getUserDetails(userId: number): void {
    this.router.navigate(['/user-details', userId]);
  }

  onSearch(searchQuery: string): void {
    this.filteredUsers = this.users.filter(user => user.id.toString().includes(searchQuery));
  }
}
