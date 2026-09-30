import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../shared/ui/button/button.component';


@Component({
  selector: 'dashboard-quick-action',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './dashboard-quick-action.component.html'
})
export class DashboardQuickActionComponent {
  tabs = [{ label: 'Search' }, { label: 'URL' }, { label: 'Upload' }];
  activeTab = signal('Search');
}
