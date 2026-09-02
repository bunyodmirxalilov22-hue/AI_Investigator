import { InvestigationVerdict, MarketAnalysis, ReviewAnalysis, RiskAnalysis } from "./models";
import { Product } from "./product.model";

export interface Investigation {
  id: string;

  product: Product;
  status: InvestigationStatus;
  score?: number;

  marketAnalysis?: MarketAnalysis;
  reviewAnalysis?: ReviewAnalysis;
  riskAnalysis?: RiskAnalysis;

  verdict?: InvestigationVerdict;

  createdAt: string;
  completedAt?: string;
}

export type InvestigationStatus =
  | 'pending'
  | 'analyzing'
  | 'completed'
  | 'failed';
