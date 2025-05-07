import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kata-evaluation-platform';

  get isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }

  constructor(private router: Router) {}

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
