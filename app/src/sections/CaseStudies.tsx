import { ArrowUpRight, TrendingUp, BarChart3, Rocket, Target } from 'lucide-react';

interface CaseCardProps {
  image: string;
  title: string;
  category: string;
  result: string;
  description: string;
  stats: { label: string; value: string }[];
  tags: string[];
}

const CaseCard = ({ image, title, category, result, description, stats, tags }: CaseCardProps) => {
  return (
    <div className="group relative bg-white dark:bg-ascend-gray-800 rounded-2xl overflow-hidden border border-ascend-gray-100 dark:border-ascend-gray-700 transition-all duration-300 hover:shadow-card hover:-translate-y-1 dark:hover:shadow-card/20">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-white/95 dark:bg-ascend-black/90 backdrop-blur-sm rounded-full text-xs font-medium text-ascend-black dark:text-white">
            {category}
          </span>
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 bg-white dark:bg-ascend-black rounded-full flex items-center justify-center">
            <ArrowUpRight size={18} className="text-ascend-black dark:text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Result Highlight */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-ascend-orange/10 rounded-lg flex items-center justify-center">
            <TrendingUp size={16} className="text-ascend-orange" />
          </div>
          <span className="text-sm font-semibold text-ascend-orange">{result}</span>
        </div>

        <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-2 group-hover:text-ascend-orange transition-colors">
          {title}
        </h3>

        <p className="text-ascend-gray-600 dark:text-ascend-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mb-4 pb-4 border-b border-ascend-gray-100 dark:border-ascend-gray-700">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-lg font-bold text-ascend-black dark:text-white">{stat.value}</p>
              <p className="text-xs text-ascend-gray-500 dark:text-ascend-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-ascend-gray-50 dark:bg-ascend-gray-700 rounded-md text-xs font-medium text-ascend-gray-600 dark:text-ascend-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      image: '/images/case-nordic-fulfillment.jpg',
      title: 'Nordic Fulfillment',
      category: 'E-handel / Logistik',
      result: '1000% omsättningsökning',
      description: 'Optimerad ROAS och skalbar annonseringsstrategi för en ledande fulfillment-partner.',
      stats: [
        { label: 'Ökning', value: '1000%' },
        { label: 'Tid', value: '1 år' },
        { label: 'ROAS', value: '8.5x' },
      ],
      tags: ['Google Ads', 'PMAX', 'Merchant Center', 'ROAS-optimering'],
    },
    {
      image: '/images/case-nordic-bangers.jpg',
      title: 'Nordic Bangers',
      category: 'Livsmedel / B2B+B2C',
      result: 'Helhetsstrategi',
      description: 'Komplett digital strategi för svensk godistillverkare med fokus på både B2B och B2C.',
      stats: [
        { label: 'Kanaler', value: '4+' },
        { label: 'Tillväxt', value: '+340%' },
        { label: 'Konvertering', value: '+28%' },
      ],
      tags: ['Google Ads', 'SEO', 'Sociala medier', 'AI-content'],
    },
    {
      image: '/images/case-nordic-refreshment.jpg',
      title: 'Nordic Refreshment',
      category: 'Drycker / D2C',
      result: 'Från idé till marknadsledare',
      description: 'Full-stack utveckling och SEO-strategi som byggde varumärket från grunden.',
      stats: [
        { label: 'Omsättning', value: 'Mkr+' },
        { label: 'Organisk', value: '65%' },
        { label: 'Ranking', value: '#1' },
      ],
      tags: ['Full-stack', 'SEO', 'PMAX', 'Social Media'],
    },
    {
      image: '/images/case-riad-cosmetics.jpg',
      title: 'Riad Cosmetics',
      category: 'Skönhet / Parfym',
      result: 'Skalbar försäljning',
      description: 'Avancerad PMAX-optimering och lokal annonsering för premium kosmetikamärke.',
      stats: [
        { label: 'ROAS', value: '12x' },
        { label: 'Budget', value: '+400%' },
        { label: 'Lokalt', value: '50+' },
      ],
      tags: ['PMAX', 'Local Campaigns', 'Google Maps', 'Premium'],
    },
  ];

  return (
    <section id="case" className="section-spacing bg-ascend-gray-50 dark:bg-ascend-gray-900 transition-colors duration-300">
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/5 dark:bg-ascend-orange/10 rounded-full border border-ascend-orange/10 dark:border-ascend-orange/20 mb-6">
                <BarChart3 size={14} className="text-ascend-orange" />
                <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">
                  Case Studies
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ascend-black dark:text-white mb-6 text-balance">
                Resultat som{' '}
                <span className="text-ascend-orange">talar för sig själva</span>
              </h2>
              <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                Se hur vi hjälpt företag att växa genom datadriven strategi och agilt arbete.
              </p>
            </div>

            {/* Summary Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Rocket size={20} className="text-ascend-orange" />
                </div>
                <p className="text-2xl font-bold text-ascend-black dark:text-white">50+</p>
                <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Projekt</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-ascend-maize/30 dark:bg-ascend-maize/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Target size={20} className="text-ascend-black dark:text-white" />
                </div>
                <p className="text-2xl font-bold text-ascend-black dark:text-white">95%</p>
                <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Nöjda kunder</p>
              </div>
            </div>
          </div>

          {/* Cases Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {cases.map((caseItem, index) => (
              <CaseCard key={index} {...caseItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
