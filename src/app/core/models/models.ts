import { Price } from "./product.model";


export interface MarketAnalysis {
  currentPrice: Price;
  averagePrice: Price;

  lowestPrice?: Price;
  highestPrice?: Price;

  priceDifference: number;
  priceDifferencePercentage: number;

  trend: PriceTrend;
}

export type PriceTrend =
  | 'rising'
  | 'falling'
  | 'stable';

  export interface ReviewAnalysis {
  averageRating: number;
  totalReviews: number;

  positivePercentage: number;
  negativePercentage: number;

  summary: string;

  pros: string[];
  cons: string[];
}

export interface RiskAnalysis {
  score: number;

  level: RiskLevel;

  flags: RiskFlag[];
}

export type RiskLevel =
  | 'low'
  | 'medium'
  | 'high';

export interface RiskFlag {
  title: string;
  description: string;
  severity: RiskSeverity;
}

export type RiskSeverity =
  | 'low'
  | 'medium'
  | 'high';

  export interface InvestigationVerdict {
  score: number;

  recommendation: Recommendation;

  summary: string;

  reasons: string[];

  warnings: string[];
}

export type Recommendation =
  | 'strong-buy'
  | 'buy'
  | 'consider'
  | 'avoid'
  | 'strong-avoid';

  export interface User {
  id: string;

  firstName: string;
  lastName: string;

  email: string;

  avatarUrl?: string;

  createdAt: string;
}

