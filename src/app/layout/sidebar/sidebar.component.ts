import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  navItems: NavItem[] = [
    { label: 'Dashboard', path: '/app/dashboard', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="3" width="8" height="5" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="13" y="12" width="8" height="9" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.6"/></svg>` },
    { label: 'Investigate', path: '/app/investigate', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.6"/><path d="m20 20-3.2-3.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>` },
    { label: 'Investigations', path: '/app/investigations', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 3h12v18l-6-4-6 4V3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>` },
    { label: 'Saved', path: '/app/saved', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m12 17.3-5.8 2.7 1.1-6.5-4.7-4.5 6.5-1L12 2l2.9 6 6.5 1-4.7 4.5 1.1 6.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>` },
    { label: 'Profile', path: '/app/profile', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.6"/><path d="M4.5 20c1.4-3.5 4.4-5.5 7.5-5.5s6.1 2 7.5 5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>` },
  ];
}
