import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .subscribe({
          next: (response) => {
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('userRole', response.role);
            sessionStorage.setItem('userEmail', response.user.email);
            sessionStorage.setItem('userId', response.user.id);
            this.router.navigate(['/participants']);
          },
          error: (err) => {
            console.error('Login fallido:', err);
            alert('Correo o contraseña incorrectos');
          }
        });
    }
  }

  goToRegister(): void {
    this.router.navigate(['']);
  }
}
