import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) {}
  showPasswordMessage: boolean;
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.authService.form.controls;

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    if (this.authService.form.valid) {
      if (
        this.authService.form.value.password ===
        this.authService.form.value.cpassword
      ) {
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
  }
}
