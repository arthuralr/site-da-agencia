export type NicheId =
  | 'revenda-carros'
  | 'advogados'
  | 'imobiliarias'
  | 'construtoras'
  | 'motos-eletricas'
  | 'dentistas'
  | 'mercados'
  | 'ecommerce';

export interface Niche {
  id: NicheId;
  title: string;
  subtitle: string;
  categoryTag: string;
  description: string;
  iconName: string;
  features: string[];
  metrics: string;
  recommendedPlan: 'site' | 'sistema';
  recommendedPrice: string;
  whatsappMessage: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'automotivo' | 'juridico-imobiliario' | 'saude-servicos' | 'ecommerce-varejo';
  categoryLabel: string;
  nicheId: NicheId;
  image: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  technologies: string[];
  conversionRateMetric: string;
  deliveryDays: number;
  liveUrlLabel: string;
}

export interface PricingPlan {
  id: 'site' | 'sistema' | 'lgpd' | 'trafego' | 'enterprise';
  name: string;
  badge?: string;
  price: string;
  period: string;
  installment: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  highlightFeatures: string[];
  whatsappMessage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  niche: string;
  content: string;
  rating: number;
  results: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
