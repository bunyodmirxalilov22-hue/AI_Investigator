import { Component, inject } from '@angular/core';
import { InvestigationService } from '../../core/services/investigation.service';
import { DashboardWelcomeComponent } from './components/dashboard-welcome.component';
import { DashboardQuickActionComponent } from './components/dashboard-quick-action.component';
import { DashboardStatsComponent } from './components/dashboard-stats.component';
import { DashboardRecentComponent } from './components/dashboard-recent.component';
import { DashboardInsightComponent } from './components/dashboard-insight.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardWelcomeComponent, DashboardQuickActionComponent, DashboardStatsComponent, DashboardRecentComponent, DashboardInsightComponent],
  templateUrl: './dashboard.page.component.html'
})
export class DashboardPageComponent {
  private investigationService = inject(InvestigationService);
  stats = this.investigationService.getStats();
  recent = this.investigationService.getRecent(4);
}
