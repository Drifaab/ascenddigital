import { useState } from 'react';
import { BookOpen, ArrowRight, Clock, Calendar, TrendingUp, Filter } from 'lucide-react';

interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Alla');
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const categories = ['Alla', 'SEO', 'Paid Social', 'E-handel', 'Agilt', 'AI'];

  const posts: BlogPost[] = [
    {
      id: 1,
      image: '/images/blog-ga4-guide.jpg',
      category: 'SEO',
      title: 'Den kompletta guiden till GA4: Från data till insikter',
      excerpt: 'Lär dig hur du maximerar värdet av Google Analytics 4. Vi går igenom event-spårning, konverteringar och rapportering som ger verklig affärsnytta.',
      readTime: '8 min',
      date: '15 jan 2026',
      featured: true,
    },
    {
      id: 2,
      image: '/images/blog-ai-marketing.jpg',
      category: 'AI',
      title: 'AI i marknadsföring: Så automatiserar du med bibehållen kvalitet',
      excerpt: 'Upptäck hur artificiell intelligens kan effektivisera ditt marknadsarbete utan att förlora den mänskliga touchen.',
      readTime: '6 min',
      date: '10 jan 2026',
    },
    {
      id: 3,
      image: '/images/blog-ecommerce-roas.jpg',
      category: 'E-handel',
      title: 'Så ökar du ROAS med 300%: E-handelsstrategier som fungerar',
      excerpt: 'Vi delar med oss av beprövade strategier för att optimera din annonsering och maximera avkastningen på varje spenderad krona.',
      readTime: '10 min',
      date: '5 jan 2026',
    },
    {
      id: 4,
      image: '/images/blog-agile-growth.jpg',
      category: 'Agilt',
      title: 'Agil tillväxt: Så skapar du momentum i din organisation',
      excerpt: 'Lär dig hur korta iterationer och datadrivna beslut kan accelerera din tillväxt och skapa en kultur av kontinuerlig förbättring.',
      readTime: '7 min',
      date: '28 dec 2025',
    },
    {
      id: 5,
      image: '/images/blog-seo-2025.jpg',
      category: 'SEO',
      title: 'SEO 2026: Vad du behöver veta om kommande algoritmuppdateringar',
      excerpt: 'En djupdykning i de senaste trenderna inom sökmotoroptimering och hur du förbereder din webbplats för framtidens sökresultat.',
      readTime: '9 min',
      date: '20 dec 2025',
    },
    {
      id: 6,
      image: '/images/blog-social-trends.jpg',
      category: 'Paid Social',
      title: 'Sociala medier-trender 2026: Där din målgrupp finns imorgon',
      excerpt: 'Från TikTok till LinkedId – vi analyserar vilka plattformar som ger bäst avkastning och hur du anpassar din strategi.',
      readTime: '5 min',
      date: '15 dec 2025',
    },
  ];

  const filteredPosts = activeCategory === 'Alla' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blogg" className="section-spacing bg-ascend-gray-50 dark:bg-ascend-gray-900 transition-colors duration-300">
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/5 dark:bg-ascend-orange/10 rounded-full border border-ascend-orange/10 dark:border-ascend-orange/20 mb-6">
                <BookOpen size={14} className="text-ascend-orange" />
                <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">
                  Blogg / Insikter
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ascend-black dark:text-white mb-4 text-balance">
                Kunskap som driver{' '}
                <span className="text-ascend-orange">digital framgång</span>
              </h2>
              <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                Utforska våra senaste insikter, guider och strategier inom digital marknadsföring.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-ascend-black dark:text-white">50+</p>
                <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Artiklar</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-ascend-black dark:text-white">10K+</p>
                <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Läsn./mån</p>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <div className="flex items-center gap-2 mr-4">
              <Filter size={16} className="text-ascend-gray-400" />
              <span className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Filtrera:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-ascend-orange text-white shadow-lg shadow-ascend-orange/25'
                    : 'bg-white dark:bg-ascend-gray-800 text-ascend-gray-600 dark:text-ascend-gray-400 border border-ascend-gray-200 dark:border-ascend-gray-700 hover:border-ascend-orange hover:text-ascend-orange'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && activeCategory === 'Alla' && (
            <div 
              className="group relative mb-10 bg-white dark:bg-ascend-gray-800 rounded-2xl overflow-hidden border border-ascend-gray-100 dark:border-ascend-gray-700 transition-all duration-300 hover:shadow-card"
              onMouseEnter={() => setHoveredPost(featuredPost.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredPost === featuredPost.id ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:bg-gradient-to-t" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ascend-orange text-white rounded-full text-xs font-medium">
                      <TrendingUp size={12} />
                      Utvald
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-ascend-orange/10 dark:bg-ascend-orange/20 text-ascend-orange rounded-full text-xs font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-ascend-gray-500 dark:text-ascend-gray-400">
                      <Calendar size={12} />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-ascend-gray-500 dark:text-ascend-gray-400">
                      <Clock size={12} />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-ascend-black dark:text-white mb-4 group-hover:text-ascend-orange transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-2 text-sm font-medium text-ascend-orange group/btn">
                    Läs artikeln
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-ascend-gray-800 rounded-xl overflow-hidden border border-ascend-gray-100 dark:border-ascend-gray-700 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredPost === post.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-ascend-orange/20 transition-opacity duration-300 ${
                    hoveredPost === post.id ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/95 dark:bg-ascend-black/90 backdrop-blur-sm rounded-full text-xs font-medium text-ascend-black dark:text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-xs text-ascend-gray-500 dark:text-ascend-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="font-semibold text-ascend-black dark:text-white mb-2 line-clamp-2 group-hover:text-ascend-orange transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-ascend-orange group/btn">
                    Läs mer
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-ascend-gray-800 border border-ascend-gray-200 dark:border-ascend-gray-700 rounded-lg text-sm font-medium text-ascend-black dark:text-white hover:border-ascend-orange hover:text-ascend-orange transition-colors group">
              Visa fler artiklar
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 p-8 md:p-10 bg-gradient-to-br from-ascend-orange/10 via-ascend-orange/5 to-ascend-maize/10 dark:from-ascend-orange/20 dark:via-ascend-orange/10 dark:to-ascend-maize/10 rounded-2xl border border-ascend-orange/10 dark:border-ascend-orange/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-ascend-black dark:text-white mb-2">
                  Få de senaste insikterna direkt i inkorgen
                </h3>
                <p className="text-ascend-gray-600 dark:text-ascend-gray-400">
                  Prenumerera på vårt nyhetsbrev och missa aldrig en uppdatering.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="din@email.se"
                    className="w-full md:w-64 px-4 py-3 bg-white dark:bg-ascend-gray-800 border border-ascend-gray-200 dark:border-ascend-gray-700 rounded-lg text-sm focus:outline-none focus:border-ascend-orange transition-colors"
                  />
                </div>
                <button className="btn-primary whitespace-nowrap">
                  Prenumerera
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
