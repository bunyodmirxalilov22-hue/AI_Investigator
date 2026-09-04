import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-card',
  standalone: true,
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() hoverable = false;

  get classes(): string {
    const paddings = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' };
    const hover = this.hoverable
      ? 'transition-shadow duration-200 hover:shadow-card-hover cursor-pointer'
      : '';
    return `surface-card ${paddings[this.padding]} ${hover}`;
  }
}
