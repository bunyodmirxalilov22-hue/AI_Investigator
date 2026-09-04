import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-skeleton',
  standalone: true,
  templateUrl: './skeleton.component.html'
})
export class SkeletonComponent {
  @Input() width = '100%';
  @Input() height = '1rem';
}
