import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  signIn(): void {
    if (!this.email.trim() || !this.password.trim()) {
      this.errorMessage = 'Email dan password harus diisi.';
      return;
    }
    this.errorMessage = '';
    this.router.navigate(['/dashboard']);
  }
}