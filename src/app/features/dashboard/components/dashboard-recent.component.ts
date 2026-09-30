import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductInvestigation } from '../../../core/models/investigation.model';
import { InvestigationCardComponent } from '../../../shared/ui/product-card/investigation-card.component';

@Component({
  selector: 'dashboard-recent',
  standalone: true,
  imports: [RouterLink, InvestigationCardComponent],
  templateUrl: './dashboard-recent.component.html'
})
export class DashboardRecentComponent {
  @Input({ required: true }) investigations!: ProductInvestigation[];
}
