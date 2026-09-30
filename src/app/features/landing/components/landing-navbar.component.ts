import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'landing-navbar',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './landing-navbar.component.html'
})
export class LandingNavbarComponent {
    private platformId = inject(PLATFORM_ID);

  isDark = signal(false);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDark.set(
        document.documentElement.classList.contains('dark')
      );
    }
  }

  toggleTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    document.documentElement.classList.toggle('dark');

    this.isDark.set(
      document.documentElement.classList.contains('dark')
    );
  }
}
