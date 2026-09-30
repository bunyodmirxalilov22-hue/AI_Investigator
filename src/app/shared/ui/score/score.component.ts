import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-score',
  standalone: true,
  templateUrl: './score.component.html'
})
export class ScoreComponent {
  @Input({ required: true }) value!: number;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() showMax = true;

  trackColor = 'var(--surface-3)';

  get dim(): number {
    return { sm: 56, md: 88, lg: 128 }[this.size];
  }

  get offset(): number {
    return 264 - (264 * Math.min(this.value, 100)) / 100;
  }

  get strokeColor(): string {
    const v = this.value;
    if (v >= 75) return '#1EA860';
    if (v >= 50) return '#D9860F';
    return '#DC2626';
  }
}
