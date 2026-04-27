export interface PPCMarket {
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
  population: string;
  avgCPL: string;
  industries: string[];
  localNote: string;
}

export const ppcMarkets: PPCMarket[] = [

];

export function getMarketBySlug(slug: string): PPCMarket | undefined {
  return ppcMarkets.find((m) => m.slug === slug);
}

export function getRelatedMarkets(current: PPCMarket, count: number): PPCMarket[] {
  return ppcMarkets.filter((m) => m.slug !== current.slug).slice(0, count);
}
