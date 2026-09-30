import { Component } from '@angular/core';

@Component({
  selector: 'landing-trust',
  standalone: true,
  templateUrl: './landing-trust.component.html'
})
export class LandingTrustComponent {
  pillars = [
    {
      stat: '0',
      title: 'Paid placements',
      description: 'Retailers can\u2019t pay for a better score. The verdict is generated from data, not advertising deals.',
    },
    {
      stat: '90d',
      title: 'Price history window',
      description: 'Every price comparison is based on real recent history, not a single snapshot.',
    },
    {
      stat: '100%',
      title: 'Shown reasoning',
      description: 'Every verdict lists exactly why — price, sentiment, and risk are always visible, never a black box.',
    },
  ];
}
