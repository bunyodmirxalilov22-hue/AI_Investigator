import { Component } from '@angular/core';

@Component({
  selector: 'landing-features',
  standalone: true,
  templateUrl: './landing-features.component.html'
})
export class LandingFeaturesComponent {
  features = [
    {
      title: 'Market price analysis',
      description: 'See how today\u2019s price compares to the 90-day market average, lowest, and highest.',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 19V5m6 14V9m6 10V3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    },
    {
      title: 'Review analysis',
      description: 'Thousands of reviews distilled into clear pros, cons, and sentiment.',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 17.3 6.2 20l1.1-6.5L2.6 9l6.5-1L12 2l2.9 6 6.5 1-4.7 4.5 1.1 6.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
    },
    {
      title: 'Risk detection',
      description: 'Flags on seller trust, warranty gaps, and anything that looks off before you commit.',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3 3 7.5v5C3 17.5 6.9 21 12 21s9-3.5 9-8.5v-5L12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
    },
    {
      title: 'Clear buying verdict',
      description: 'One recommendation — buy, consider, or avoid — backed by the reasoning behind it.',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
    {
      title: 'Save & track',
      description: 'Keep products on a watchlist and see how their score changes as prices move.',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 3h12v18l-6-4-6 4V3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
    },
    {
      title: 'Side-by-side comparison',
      description: 'Line up two or three options and see which one actually wins on the numbers.',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="6" height="16" rx="1.2" stroke="currentColor" stroke-width="1.6"/><rect x="14" y="4" width="7" height="10" rx="1.2" stroke="currentColor" stroke-width="1.6"/></svg>`,
    },
  ];
}
