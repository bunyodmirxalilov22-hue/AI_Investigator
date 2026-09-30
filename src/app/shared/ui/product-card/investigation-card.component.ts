import { Component, Input } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ProductInvestigation } from '../../../core/models/investigation.model';
import { RecommendationBadgeComponent } from '../recommendation-badge/recommendation-badge.component';
import { ScoreComponent } from '../score/score.component';

@Component({
  selector: 'ui-investigation-card',
  standalone: true,
  imports: [DatePipe, DecimalPipe, RecommendationBadgeComponent, ScoreComponent],
  templateUrl: './investigation-card.component.html'
})
export class InvestigationCardComponent {
  @Input({ required: true }) investigation!: ProductInvestigation;
}
