import { Search, Share2, Code2, RefreshCw, ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: 'orange' | 'maize' | 'gray';
}

const ServiceCard = ({ icon, title, subtitle, description, features, color }: ServiceCardProps) => {
  const colorClasses = {
    orange: 'bg-ascend-orange/5 dark:bg-ascend-orange/10 border-ascend-orange/10 dark:border-ascend-orange/20 hover:border-ascend-orange/30 dark:hover:border-ascend-orange/40',
    maize: 'bg-ascend-maize/10 dark:bg-ascend-maize/5 border-ascend-maize/20 dark:border-ascend-maize/10 hover:border-ascend-maize/40 dark:hover:border-ascend-maize/30',
    gray: 'bg-ascend-gray-50 dark:bg-ascend-gray-800/50 border-ascend-gray-100 dark:border-ascend-gray-700 hover:border-ascend-gray-300 dark:hover:border-ascend-gray-600',
  };

  const iconColors = {
    orange: 'bg-ascend-orange/10 text-ascend-orange',
    maize: 'bg-ascend-maize/30 dark:bg-ascend-maize/20 text-ascend-black dark:text-white',
    gray: 'bg-ascend-gray-200 dark:bg-ascend-gray-700 text-ascend-black dark:text-white',
  };

  return (
    <div className={`group relative p-6 md:p-8 rounded-2xl border ${colorClasses[color]} transition-all duration-300 hover:shadow-card hover:-translate-y-1 dark:hover:shadow-card/20`}>
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl ${iconColors[color]} flex items-center justify-center mb-6`}>
        {icon}
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <p className="text-xs font-medium text-ascend-gray-500 dark:text-ascend-gray-400 uppercase tracking-wider mb-2">
            {subtitle}
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-ascend-black dark:text-white group-hover:text-ascend-orange transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 pt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-ascend-gray-600 dark:text-ascend-gray-400">
              <span className="w-1.5 h-1.5 bg-ascend-orange rounded-full mt-1.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight size={20} className="text-ascend-orange" />
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Search size={28} />,
      title: 'SEM / SEO / GEO',
      subtitle: 'Performance i Google',
      description: 'Datadriven sökstrategi där annonser, landningssidor och innehåll samspelar för maximal konvertering.',
      features: [
        'Google Ads (Search, PMAX, Shopping)',
        'SEO-optimering & innehållsstrategi',
        'GEO för generativa sökresultat',
        'Datakvalitet & spårning (GA4)',
      ],
      color: 'orange' as const,
    },
    {
      icon: <Share2 size={28} />,
      title: 'Paid Social',
      subtitle: 'Sociala medier',
      description: 'Kreativ testmetodik + tydlig funnel som driver mätbar tillväxt i sociala kanaler.',
      features: [
        'Meta (Facebook & Instagram)',
        'TikTok & LinkedIn',
        'Kreativ testning & optimering',
        'Funnel-strategi & retargeting',
      ],
      color: 'maize' as const,
    },
    {
      icon: <Code2 size={28} />,
      title: 'Full-stack Development',
      subtitle: 'Teknik & utveckling',
      description: 'Snabba, skalbara webblösningar byggda för prestanda, UX och försäljning.',
      features: [
        'React/Next.js webbutveckling',
        'E-handelslösningar',
        'Prestandaoptimering (CWV)',
        'Teknisk integration & spårning',
      ],
      color: 'gray' as const,
    },
    {
      icon: <RefreshCw size={28} />,
      title: 'Agile Business Development',
      subtitle: 'Arbetssätt',
      description: 'Iterativt arbetssätt som skapar fokus, momentum och bättre beslut.',
      features: [
        'Korta sprintar (1-2 veckor)',
        'Hypotesstyrd tillväxt',
        'Transparent uppföljning',
        'KPI-driven processoptimering',
      ],
      color: 'orange' as const,
    },
  ];

  return (
    <section id="tjanster" className="section-spacing bg-white dark:bg-ascend-black transition-colors duration-300">
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/5 dark:bg-ascend-orange/10 rounded-full border border-ascend-orange/10 dark:border-ascend-orange/20 mb-6">
              <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">
                Vad vi gör
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ascend-black dark:text-white mb-6 text-balance">
              Tjänster som driver{' '}
              <span className="text-ascend-orange">digital tillväxt</span>
            </h2>
            <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
              Vi kombinerar expertis inom Googles ekosystem med ett agilt arbetssätt
              för att leverera mätbara resultat.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
