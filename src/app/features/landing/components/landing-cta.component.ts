import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../shared/ui/button/button.component';

@Component({
  selector: 'landing-cta',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './landing-cta.component.html'
})
export class LandingCtaComponent {}
