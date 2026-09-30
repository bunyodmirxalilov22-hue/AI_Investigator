import { Component } from '@angular/core';
import { LandingExampleComponent } from './components/landing-example.component';
import { LandingCtaComponent } from './components/landing-cta.component';
import { LandingFeaturesComponent } from './components/landing-features.component';
import { LandingNavbarComponent } from './components/landing-navbar.component';
import { LandingHeroComponent } from './components/landing-hero.component';
import { LandingProcessDemoComponent } from './components/landing-process-demo.component';
import { LandingHowItWorksComponent } from './components/landing-how-it-works.component';
import { LandingTrustComponent } from './components/landing-trust.component';
import { LandingFooterComponent } from './components/landing-footer.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    LandingNavbarComponent,
    LandingHeroComponent,
    LandingProcessDemoComponent,
    LandingHowItWorksComponent,
    LandingFeaturesComponent,
    LandingExampleComponent,
    LandingTrustComponent,
    LandingCtaComponent,
    LandingFooterComponent,
  ],
  templateUrl: './landing.page.component.html'
})
export class LandingPage {}
