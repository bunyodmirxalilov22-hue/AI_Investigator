import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-stat-card',
  standalone: true,
  templateUrl: './stat-card.component.html'
})
export class StatCardComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: string | number;
  @Input() trend?: 'up' | 'down';
  @Input() trendValue = '';
}
