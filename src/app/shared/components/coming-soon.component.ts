import { Component, Input } from '@angular/core';
import { EmptyStateComponent } from '../ui/empty-state/empty-state.component';


@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [EmptyStateComponent],
  templateUrl: './coming-soon.component.html'
})
export class ComingSoonComponent {
  @Input() title = 'This page';
}
