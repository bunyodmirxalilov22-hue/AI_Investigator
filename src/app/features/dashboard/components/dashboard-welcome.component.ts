import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-welcome',
  standalone: true,
  templateUrl: './dashboard-welcome.component.html'
})
export class DashboardWelcomeComponent {
  greeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }
}
