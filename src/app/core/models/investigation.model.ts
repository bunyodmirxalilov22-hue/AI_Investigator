export type RecommendationType = 'BUY' | 'CONSIDER' | 'AVOID';
export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';
export type InvestigationStatus = 'completed' | 'processing' | 'failed';

export interface PricePoint {
  date: string;
  price: number;
}

export interface MarketAnalysis {
  currentPrice: number;
  averagePrice: number;
  lowestPrice: number;
  highestPrice: number;
  currency: string;
  trend: 'down' | 'up' | 'flat';
  history: PricePoint[];
}

export interface ReviewAnalysis {
  averageRating: number;
  totalReviews: number;
  positivePct: number;
  neutralPct: number;
  negativePct: number;
  pros: string[];
  cons: string[];
  aiSummary: string;
}

export interface RiskFlag {
  label: string;
  severity: 'ok' | 'warning' | 'danger';
}

export interface RiskAnalysis {
  level: RiskLevel;
  score: number;
  flags: RiskFlag[];
}

export interface ProductInvestigation {
  id: string;
  productName: string;
  brand: string;
  category: string;
  imageUrl: string;
  price: number;
  currency: string;
  aiScore: number;
  recommendation: RecommendationType;
  status: InvestigationStatus;
  createdAt: string;
  market: MarketAnalysis;
  reviews: ReviewAnalysis;
  risk: RiskAnalysis;
  verdictReasons: string[];
  verdictWarnings: string[];
}
