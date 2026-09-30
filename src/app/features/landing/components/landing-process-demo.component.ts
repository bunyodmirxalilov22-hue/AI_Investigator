import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface DemoStep {
  label: string;
  detail: string;
}

@Component({
  selector: 'landing-process-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-process-demo.component.html'
})
export class LandingProcessDemoComponent {
  steps: DemoStep[] = [
    { label: 'Identifying product', detail: 'Matching the listing to a known product and brand.' },
    { label: 'Collecting market data', detail: 'Pulling current listings across major retailers.' },
    { label: 'Comparing prices', detail: 'Checking today\u2019s price against 90-day history.' },
    { label: 'Analyzing reviews', detail: 'Reading review text to separate signal from noise.' },
    { label: 'Evaluating risks', detail: 'Checking seller trust, warranty terms, and return policy.' },
    { label: 'Generating verdict', detail: 'Weighing price, sentiment, and risk into one recommendation.' },
  ];

  activeIndex = signal(4);

  progressPct = () => Math.round(((this.activeIndex() + 1) / this.steps.length) * 100);
}
