import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecommendationBadgeComponent } from '../../../shared/ui/recommendation-badge/recommendation-badge.component';
import { ScoreComponent } from '../../../shared/ui/score/score.component';
import { ButtonComponent } from '../../../shared/ui/button/button.component';


@Component({
  selector: 'landing-hero',
  standalone: true,
  imports: [RouterLink, ButtonComponent, ScoreComponent, RecommendationBadgeComponent],
  templateUrl: './landing-hero.component.html'
})
export class LandingHeroComponent {
  tabs = ['Search', 'URL', 'Upload'] as const;
  activeTab = signal<string>('Search');
}
