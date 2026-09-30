import { Component, Input } from '@angular/core';
import { StatCardComponent } from '../../../shared/ui/stat-card/stat-card.component';


export interface DashboardStatsData {
  total: number;
  completed: number;
  averageScore: number;
  saved: number;
}

@Component({
  selector: 'dashboard-stats',
  standalone: true,
  imports: [StatCardComponent],
  templateUrl: './dashboard-stats.component.html'
})
export class DashboardStatsComponent {
  @Input({ required: true }) stats!: DashboardStatsData;
}
