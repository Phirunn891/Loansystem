import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loginbank',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './loginbank.html', 
  styleUrl: './loginbank.css'
})
export class Loginbank {
  private router = inject(Router);
  
  email: string = '';
  password: string = '';
  keepSignedIn: boolean = false;
  loading: boolean = false;
  passwordVisible: boolean = false;
  errorMessage: string = '';

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSignIn() {
    this.errorMessage = '';
    if (this.email && this.password) {
      this.loading = true;
      // Simulate API call
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/bankhomescreen']);
      }, 1500);
    } else {
      this.errorMessage = 'Please enter both email and password.';
    }
  }

  continueWith(provider: string) {
    console.log(`Continuing with ${provider}`);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/bankhomescreen']);
    }, 1000);
  }
}


