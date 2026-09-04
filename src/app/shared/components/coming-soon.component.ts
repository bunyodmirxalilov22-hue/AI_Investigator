import { Component, Input } from '@angular/core';
import { EmptyStateComponent } from '../ui/empty-state/empty-state.component';


@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [EmptyStateComponent],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.scss',
})
export class ComingSoonComponent {
  @Input() title = 'This page';
}
