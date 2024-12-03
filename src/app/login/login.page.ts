import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private authService: AuthService, private router: Router) {}

  async loginWithGoogle() {
    await this.authService.loginWithGoogle();
    this.router.navigate(['/home']); // Redirect ke halaman utama setelah login
  }
}
