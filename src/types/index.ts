export interface AIAgent {
  id: string;
  name: string;
  description: string;
  category: 'coding' | 'general' | 'writing' | 'research';
  pricingType: 'free' | 'freemium' | 'trial' | 'limited';
  features: string[];
  limitations: string[];
  url: string;
  tags: string[];
  lastUpdated: string;
  popularity: number;
}

export interface FilterOptions {
  category: string;
  pricingType: string;
  searchTerm: string;
}