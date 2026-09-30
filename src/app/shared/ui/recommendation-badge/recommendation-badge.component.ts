import { Component, Input } from '@angular/core';

export type Recommendation = 'BUY' | 'CONSIDER' | 'AVOID';

@Component({
  selector: 'ui-recommendation-badge',
  standalone: true,
  templateUrl: './recommendation-badge.component.html'
})
export class RecommendationBadgeComponent {
  @Input({ required: true }) recommendation!: Recommendation;

  private get tone(): string {
    const map: Record<Recommendation, string> = {
      BUY: 'success',
      CONSIDER: 'warning',
      AVOID: 'danger',
    };
    return map[this.recommendation];
  }

  get classes(): string {
    const base = 'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold tracking-wide';
    const tones: Record<string, string> = {
      success: 'bg-success-50 text-success-700 dark:bg-success-500/10 dark:text-success-400',
      warning: 'bg-warning-50 text-warning-700 dark:bg-warning-500/10 dark:text-warning-400',
      danger: 'bg-danger-50 text-danger-700 dark:bg-danger-500/10 dark:text-danger-400',
    };
    return `${base} ${tones[this.tone]}`;
  }

  get dot(): string {
    const tones: Record<string, string> = {
      success: 'bg-success-500',
      warning: 'bg-warning-400',
      danger: 'bg-danger-500',
    };
    return tones[this.tone];
  }
}
