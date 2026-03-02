export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  industry: string;
  result: string;
  description: string;
  longDescription: string;
  market: string;
  image: string;
  gradient: string;
  stats: { value: string; label: string; subtext?: string }[];
  tags: string[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  color: 'orange' | 'maize' | 'gray';
  features: string[];
}

export interface NavItem {
  href: string;
  label: string;
}

export interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
}
