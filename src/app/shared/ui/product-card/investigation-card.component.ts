import { Component, Input } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ProductInvestigation } from '../../../core/models/investigation.model';
import { RecommendationBadge } from '../recommendation-badge/recommendation-badge';
import { Score } from '../score/score';

@Component({
  selector: 'ui-investigation-card',
  standalone: true,
  imports: [DatePipe, DecimalPipe, RecommendationBadge, Score],
  templateUrl: './investigation-card.component.html'
})
export class InvestigationCardComponent {
  @Input({ required: true }) investigation!: ProductInvestigation;
}
