import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarComponent, MobileNavComponent],
  templateUrl: './main-layout.component.html'
})
export class MainLayout {}
