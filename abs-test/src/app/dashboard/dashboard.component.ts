import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) {}

  userArray = [];
  showDeleteMessage: boolean = false;
  searchText: string = '';

  showPasswordMessage: boolean;
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.authService.form.controls;

  ngOnInit() {
    this.authService.getUsers().subscribe(list => {
      this.userArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
  }

  onDelete($key) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.authService.deleteUser($key);
      this.showDeleteMessage = true;
      setTimeout(() => (this.showDeleteMessage = false), 3000);
    }
  }

  filterCondition(user) {
    return (
      user.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1
    );
  }

  onCreate() {
    this.submitted = true;
    if (this.authService.form.valid) {
      if (this.authService.form.get('$key').value === null) {
        this.authService.registerUser(this.authService.form.value);
      } else {
        this.authService.updateUser(this.authService.form.value);
      }
      this.showSuccessMessage = true;
      setTimeout(() => (this.showSuccessMessage = false), 3000);
      this.submitted = false;
      this.authService.form.reset();
    }
  }

  onLogout() {
    this.authService.logoutUser();
  }
}
