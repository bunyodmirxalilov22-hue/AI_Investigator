import { Injectable, signal } from '@angular/core';
import { ProductInvestigation } from '../models/investigation.model';

const MOCK_INVESTIGATIONS: ProductInvestigation[] = [
  {
    id: 'inv-1',
    productName: 'iPhone 15 Pro',
    brand: 'Apple',
    category: 'Smartphones',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&q=80',
    price: 999,
    currency: 'USD',
    aiScore: 87,
    recommendation: 'BUY',
    status: 'completed',
    createdAt: '2026-08-24T10:15:00Z',
    market: {
      currentPrice: 999, averagePrice: 1049, lowestPrice: 949, highestPrice: 1099,
      currency: 'USD', trend: 'down',
      history: [
        { date: 'Jun', price: 1099 }, { date: 'Jul', price: 1079 }, { date: 'Aug', price: 999 },
      ],
    },
    reviews: {
      averageRating: 4.6, totalReviews: 2431, positivePct: 78, neutralPct: 14, negativePct: 8,
      pros: ['Excellent camera', 'Strong performance', 'Premium build'],
      cons: ['Expensive', 'No charger included'],
      aiSummary: 'Buyers consistently praise the camera and build quality; the main complaints are price and the missing charger in the box.',
    },
    risk: {
      level: 'LOW', score: 18,
      flags: [
        { label: 'Trusted brand', severity: 'ok' },
        { label: 'Strong review history', severity: 'ok' },
        { label: 'Seller warranty should be checked', severity: 'warning' },
      ],
    },
    verdictReasons: ['Price is below market average', 'Strong customer sentiment', 'Low risk profile'],
    verdictWarnings: ['Verify seller warranty'],
  },
  {
    id: 'inv-2',
    productName: 'WH-1000XM5 Headphones',
    brand: 'Sony',
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=200&q=80',
    price: 348,
    currency: 'USD',
    aiScore: 74,
    recommendation: 'CONSIDER',
    status: 'completed',
    createdAt: '2026-08-22T09:00:00Z',
    market: {
      currentPrice: 348, averagePrice: 330, lowestPrice: 298, highestPrice: 399,
      currency: 'USD', trend: 'up',
      history: [
        { date: 'Jun', price: 298 }, { date: 'Jul', price: 320 }, { date: 'Aug', price: 348 },
      ],
    },
    reviews: {
      averageRating: 4.4, totalReviews: 1189, positivePct: 71, neutralPct: 18, negativePct: 11,
      pros: ['Best-in-class noise cancelling', 'Comfortable for long wear'],
      cons: ['Touch controls feel finicky', 'Case is bulky'],
      aiSummary: 'Reviewers love the noise cancellation and comfort, but some mention the touch controls are inconsistent.',
    },
    risk: {
      level: 'MEDIUM', score: 42,
      flags: [
        { label: 'Trusted brand', severity: 'ok' },
        { label: 'Price above 90-day average', severity: 'warning' },
      ],
    },
    verdictReasons: ['Strong review history', 'Well-known, reliable brand'],
    verdictWarnings: ['Currently priced above its 90-day average', 'Consider waiting for a price drop'],
  },
  {
    id: 'inv-3',
    productName: 'Instant Pot Duo 7-in-1',
    brand: 'Instant',
    category: 'Kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=200&q=80',
    price: 129,
    currency: 'USD',
    aiScore: 39,
    recommendation: 'AVOID',
    status: 'completed',
    createdAt: '2026-08-19T14:30:00Z',
    market: {
      currentPrice: 129, averagePrice: 89, lowestPrice: 79, highestPrice: 129,
      currency: 'USD', trend: 'up',
      history: [
        { date: 'Jun', price: 79 }, { date: 'Jul', price: 84 }, { date: 'Aug', price: 129 },
      ],
    },
    reviews: {
      averageRating: 3.8, totalReviews: 5210, positivePct: 58, neutralPct: 20, negativePct: 22,
      pros: ['Versatile functions', 'Easy to clean'],
      cons: ['Recent quality complaints', 'Seal wears out fast'],
      aiSummary: 'A wave of recent reviews reports the sealing ring degrading quickly — an uptick from the usual complaint rate.',
    },
    risk: {
      level: 'HIGH', score: 71,
      flags: [
        { label: 'Recent negative review spike', severity: 'danger' },
        { label: 'Priced 45% above recent average', severity: 'danger' },
        { label: 'Return window is short', severity: 'warning' },
      ],
    },
    verdictReasons: ['Currently significantly overpriced vs. history'],
    verdictWarnings: ['Recent spike in quality complaints', 'Priced well above its typical range'],
  },
  {
    id: 'inv-4',
    productName: 'Dyson V15 Detect',
    brand: 'Dyson',
    category: 'Home Appliances',
    imageUrl: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=200&q=80',
    price: 649,
    currency: 'USD',
    aiScore: 82,
    recommendation: 'BUY',
    status: 'completed',
    createdAt: '2026-08-15T08:00:00Z',
    market: {
      currentPrice: 649, averagePrice: 699, lowestPrice: 599, highestPrice: 749,
      currency: 'USD', trend: 'down',
      history: [
        { date: 'Jun', price: 749 }, { date: 'Jul', price: 699 }, { date: 'Aug', price: 649 },
      ],
    },
    reviews: {
      averageRating: 4.5, totalReviews: 3320, positivePct: 80, neutralPct: 12, negativePct: 8,
      pros: ['Powerful suction', 'Laser dust detection is genuinely useful'],
      cons: ['Battery life on max mode is short', 'Pricey accessories'],
      aiSummary: 'Owners are impressed by suction power and the laser detection feature; the main gripe is short runtime on the highest setting.',
    },
    risk: {
      level: 'LOW', score: 22,
      flags: [
        { label: 'Trusted brand', severity: 'ok' },
        { label: 'Consistent review history', severity: 'ok' },
      ],
    },
    verdictReasons: ['Priced below market average', 'Consistently strong reviews', 'Low risk profile'],
    verdictWarnings: [],
  },
];

@Injectable({ providedIn: 'root' })
export class InvestigationService {
  private readonly investigations = signal<ProductInvestigation[]>(MOCK_INVESTIGATIONS);

  getAll() {
    return this.investigations.asReadonly();
  }

  getRecent(limit = 3): ProductInvestigation[] {
    return [...this.investigations()]
      .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
      .slice(0, limit);
  }

  getById(id: string): ProductInvestigation | undefined {
    return this.investigations().find((i) => i.id === id);
  }

  getStats() {
    const all = this.investigations();
    const completed = all.filter((i) => i.status === 'completed');
    const avgScore = completed.length
      ? Math.round(completed.reduce((sum, i) => sum + i.aiScore, 0) / completed.length)
      : 0;
    return {
      total: all.length,
      completed: completed.length,
      averageScore: avgScore,
      saved: 2,
    };
  }
}
