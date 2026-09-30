import { Component } from '@angular/core';

@Component({
  selector: 'landing-how-it-works',
  standalone: true,
  templateUrl: './landing-how-it-works.component.html'
})
export class LandingHowItWorksComponent {
  steps = [
    {
      title: 'Add a product',
      description: 'Search by name, paste a product link, or upload a photo of what you\u2019re considering.',
    },
    {
      title: 'AI investigates',
      description: 'We check the price history, read through reviews, and flag anything risky — in seconds.',
    },
    {
      title: 'Get your verdict',
      description: 'A clear buy, consider, or avoid recommendation, with the reasoning laid out plainly.',
    },
  ];
}
