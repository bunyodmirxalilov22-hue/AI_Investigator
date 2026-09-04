import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating..component.html'
})
export class RatingComponent {
  @Input({ required: true }) value!: number;
  @Input() count?: number;

  Math = Math;
  stars = [1, 2, 3, 4, 5];

  get countLabel(): string {
    const c = this.count;
    if (!c) return '';
    return c >= 1000 ? `${(c / 1000).toFixed(1)}k reviews` : `${c} reviews`;
  }
}
