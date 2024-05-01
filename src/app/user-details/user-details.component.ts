import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: number = 0;
  user: any;
  users: any[] = [];
  filteredUsers: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['userId'];
      this.fetchUserDetails(this.userId);
    });
  }

  fetchUserDetails(userId: number): void {
    this.loadingService.setLoading(true); 
    this.userService.getUserDetails(userId).subscribe(
      (userData) => {
        console.log('User Data:', userData);
        if (userData && userData.data && userData.data.first_name && userData.data.last_name) {
          this.user = {
            first_name: userData.data.first_name,
            last_name: userData.data.last_name
          };
        } else {
          console.error('User data is missing first name or last name properties:', userData);
        }
        this.loadingService.setLoading(false); 
      },
      (error) => {
        console.error('Error fetching user details:', error);
        this.loadingService.setLoading(false); 
      }
    );
  }

  navigateBack(): void {
    this.router.navigate(['/users']);
  }
  
  onSearch(searchQuery: string): void {
    this.filteredUsers = this.users.filter(user => user.id.toString().includes(searchQuery));
  }
}
