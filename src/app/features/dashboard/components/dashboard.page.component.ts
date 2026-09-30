import { Component, inject } from '@angular/core';
import { DashboardWelcomeComponent } from './dashboard-welcome.component';
import { DashboardQuickActionComponent } from './dashboard-quick-action.component';
import { DashboardStatsComponent } from './dashboard-stats.component';
import { DashboardRecentComponent } from './dashboard-recent.component';
import { DashboardInsightComponent } from './dashboard-insight.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardWelcomeComponent, DashboardQuickActionComponent, DashboardStatsComponent, DashboardRecentComponent, DashboardInsightComponent],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPageComponent {
  private investigationService = inject(InvestigationService);
  stats = this.investigationService.getStats();
  recent = this.investigationService.getRecent(4);
}
