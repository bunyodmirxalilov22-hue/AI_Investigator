import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-insight',
  standalone: true,
  templateUrl: './dashboard-insight.component.html'
})
export class DashboardInsightComponent {
  @Input() message =
    'You investigated 3 products this week. Most of them were priced below the market average — nice timing.';
}
