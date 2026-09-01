import { Component, Input } from '@angular/core';

export type BadgeTone = 'neutral' | 'accent' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'ui-badge',
  standalone: true,
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class BadgeComponent {
  @Input() tone: BadgeTone = 'neutral';

  get classes(): string {
    const base = 'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium leading-none';
    const tones: Record<BadgeTone, string> = {
      neutral: 'bg-[var(--surface-3)] text-[var(--text-secondary)]',
      accent: 'bg-accent-50 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300',
      success: 'bg-success-50 text-success-700 dark:bg-success-500/10 dark:text-success-400',
      warning: 'bg-warning-50 text-warning-700 dark:bg-warning-500/10 dark:text-warning-400',
      danger: 'bg-danger-50 text-danger-700 dark:bg-danger-500/10 dark:text-danger-400',
    };
    return `${base} ${tones[this.tone]}`;
  }
}
