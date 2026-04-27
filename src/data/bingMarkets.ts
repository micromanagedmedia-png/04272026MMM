export interface BingMarket {
  slug: string;
  city: string;
  state: string;
  fullName: string;
  rank: number;
  tier: number;
  competitionLevel: string;
  marketDesc: string;
  searchVolume: string;
  cpcRange: string;
  googleCpcRange: string;
  savingsVsGoogle: string;
  population: string;
  avgCPL: string;
  industries: string[];
  localNote: string;
  linkedInOpportunity: 'Excellent' | 'Strong' | 'Good';
}

export const bingMarkets: BingMarket[] = [
  
];

export function getBingMarketBySlug(slug: string): BingMarket | undefined {
  return bingMarkets.find((m) => m.slug === slug);
}

export function getRelatedBingMarkets(current: BingMarket, count: number): BingMarket[] {
  return bingMarkets.filter((m) => m.slug !== current.slug).slice(0, count);
}
