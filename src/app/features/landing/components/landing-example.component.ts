import { Component } from '@angular/core';
import { RecommendationBadgeComponent } from '../../../shared/ui/recommendation-badge/recommendation-badge.component';
import { RatingComponent } from '../../../shared/ui/raiting/raiting.component';
import { ScoreComponent } from '../../../shared/ui/score/score.component';


@Component({
  selector: 'landing-example',
  standalone: true,
  imports: [ScoreComponent, RecommendationBadgeComponent, RatingComponent],
  templateUrl: './landing-example.component.html'
})
export class LandingExampleComponent {}
