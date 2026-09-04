import { Component, Input } from '@angular/core';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

@Component({
  selector: 'ui-risk-badge',
  standalone: true,
  templateUrl: './risk-badge.component.html'
})
export class RiskBadgeComponent {
  @Input({ required: true }) level!: RiskLevel;

  get classes(): string {
    const base = 'inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold tracking-wide';
    const tones: Record<RiskLevel, string> = {
      LOW: 'bg-success-50 text-success-700 dark:bg-success-500/10 dark:text-success-400',
      MEDIUM: 'bg-warning-50 text-warning-700 dark:bg-warning-500/10 dark:text-warning-400',
      HIGH: 'bg-danger-50 text-danger-700 dark:bg-danger-500/10 dark:text-danger-400',
    };
    return `${base} ${tones[this.level]}`;
  }
}
