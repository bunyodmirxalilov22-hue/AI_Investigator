import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-empty-state',
  standalone: true,
  templateUrl: './empty-state.component.html'
})
export class EmptyStateComponent {
  @Input({ required: true }) title!: string;
  @Input() description = '';
  @Input() icon =
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.6"/><path d="m20 20-3.2-3.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;
}
