import { ArrowLeft, TrendingUp, Target, Globe, Mail, Search, BarChart3 } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useNavigate } from 'react-router-dom';

const CaseNordicFulfillment = () => {
  const navigate = useNavigate();
  const stats = [
    { value: '1,7', suffix: 'M', prefix: '', label: 'Månadsomsättning SEK', subtext: 'Per 30 dagar' },
    { value: '40', suffix: 'K', prefix: '', label: 'Initial omsättning/mån', subtext: 'Vid start' },
    { value: '10-15', suffix: '%', prefix: '', label: 'Tillväxt per månad', subtext: 'Hållbart momentum' },
    { value: '30', suffix: 'M', prefix: '', label: 'Mål årsomsättning 2026', subtext: 'SEK' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300 pt-20">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ascend-orange/5 via-transparent to-ascend-maize/10" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate('/case')} className="inline-flex items-center gap-2 text-sm text-ascend-gray-600 dark:text-ascend-gray-400 hover:text-ascend-orange transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till case
          </button>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-ascend-orange/10 text-ascend-orange rounded-full text-xs font-medium">E-handel (B2C)</span>
                <span className="px-3 py-1 bg-ascend-gray-100 dark:bg-ascend-gray-800 text-ascend-gray-600 dark:text-ascend-gray-400 rounded-full text-xs font-medium">Nikotin Pouches</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ascend-black dark:text-white leading-tight">Nordic Fulfillment</h1>
              <p className="text-xl md:text-2xl text-ascend-orange font-medium mt-4">Global dominans inom Nicotine Pouches</p>
              <p className="mt-6 text-lg text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                Från en blygsam start på 40 000 SEK i månadsomsättning till en global aktör som omsätter 1,7 miljoner SEK per 30 dagar. En exceptionell tillväxtresa driven av datadriven precision och strategisk marknadsexpertis.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Marknad:</span>
                <span className="text-sm font-medium text-ascend-black dark:text-white">Australien (Dominant), USA (Stora andelar), Europa (Expansion 2026)</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-5 md:p-6 bg-white dark:bg-ascend-gray-800 rounded-xl shadow-sm border border-ascend-gray-100 dark:border-ascend-gray-700">
                  <p className="text-2xl md:text-3xl font-bold text-ascend-orange">
                    <AnimatedCounter value={`${stat.prefix}${stat.value}${stat.suffix}`} />
                  </p>
                  <p className="mt-1 text-sm font-medium text-ascend-black dark:text-white">{stat.label}</p>
                  {stat.subtext && <p className="text-xs text-ascend-gray-400 dark:text-ascend-gray-500">{stat.subtext}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ascend-gray-50 dark:bg-ascend-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/10 rounded-full border border-ascend-orange/20 mb-6">
              <BarChart3 size={14} className="text-ascend-orange" />
              <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">Investering & Avkastning</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Framgångsrik budgetförvaltning</h2>
            <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400">
              Vi har framgångsrikt förvaltat en Google Ads-budget på över 5 miljoner SEK, där varje krona optimerats genom avancerade budgivningsstrategier.
            </p>
          </div>
          <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-8 md:p-12 border border-ascend-gray-100 dark:border-ascend-gray-700">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-ascend-orange">5M+</p>
                <p className="mt-2 text-ascend-black dark:text-white font-medium">SEK i hanterad budget</p>
                <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Google Ads</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-ascend-orange">42x</p>
                <p className="mt-2 text-ascend-black dark:text-white font-medium">Omsättningsökning</p>
                <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Från start till idag</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-ascend-orange">3</p>
                <p className="mt-2 text-ascend-black dark:text-white font-medium">Globala marknader</p>
                <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Med dominans i Australien</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Strategiskt & Tekniskt fokus</h2>
            <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400">Vår approach kombinerar djup marknadskännedom med teknisk excellens för att skapa hållbar tillväxt.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-3">Customer Lifetime Value (CLV)</h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 text-sm leading-relaxed">
                Inom nikotinbranschen är återköpsfrekvensen avgörande. Vi initierade och implementerade ett omfattande retention-program med automatiserad e-postmarknadsföring.
              </p>
            </div>
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-3">SEO, GEO & Internationell anpassning</h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 text-sm leading-relaxed">
                Under 2026 leder vi ett massivt arbete med SEO och lokalisering. Vi optimerar för "Commercial Intent" och bygger innehåll med FAQ-strukturerad data för att dominera i generativa sökresultat.
              </p>
            </div>
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-3">Marknadsspecifik expertis</h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 text-sm leading-relaxed">
                Vi har säkrat en total dominans i Australien och tagit betydande marknadsandelar i USA genom att navigera komplexa regelverk och lokala sökbeteenden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ascend-gray-50 dark:bg-ascend-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/10 rounded-full border border-ascend-orange/20 mb-6">
              <TrendingUp size={14} className="text-ascend-orange" />
              <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">Tillväxtresan</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Den exceptionella tillväxtresan</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-ascend-gray-200 dark:bg-ascend-gray-700 md:-translate-x-1/2" />
            <div className="space-y-12">
              <div className="relative md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
                  <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-2">Start</h3>
                  <p className="text-ascend-gray-600 dark:text-ascend-gray-400">Månadsomsättning på 40 000 SEK. En ny aktör på marknaden med potential för global expansion.</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-ascend-orange rounded-full border-4 border-white dark:border-ascend-gray-900 md:-translate-x-1/2" />
                <div className="md:w-1/2 md:pl-12 pl-12">
                  <div className="md:hidden mb-2">
                    <h3 className="text-xl font-semibold text-ascend-black dark:text-white">Start</h3>
                  </div>
                  <div className="bg-white dark:bg-ascend-gray-800 rounded-xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
                    <p className="text-3xl font-bold text-ascend-orange">40 000 SEK</p>
                    <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Initial månadsomsättning</p>
                  </div>
                </div>
              </div>
              <div className="relative md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white dark:bg-ascend-gray-800 rounded-xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700 md:ml-auto">
                    <p className="text-3xl font-bold text-ascend-orange">10-15%</p>
                    <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Månatlig tillväxttakt</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-ascend-orange rounded-full border-4 border-white dark:border-ascend-gray-900 md:-translate-x-1/2" />
                <div className="md:w-1/2 md:pl-12 pl-12 hidden md:block">
                  <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-2">Hållbart momentum</h3>
                  <p className="text-ascend-gray-600 dark:text-ascend-gray-400">Med en stabil tillväxttakt på 10–15 % per månad byggde vi en skalbar tillväxtmaskin.</p>
                </div>
              </div>
              <div className="relative md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
                  <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-2">Global skala</h3>
                  <p className="text-ascend-gray-600 dark:text-ascend-gray-400">Idag är Nordic Fulfillment en global aktör med dominans i Australien och starka positioner i USA.</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-ascend-orange rounded-full border-4 border-white dark:border-ascend-gray-900 md:-translate-x-1/2" />
                <div className="md:w-1/2 md:pl-12 pl-12">
                  <div className="md:hidden mb-2">
                    <h3 className="text-xl font-semibold text-ascend-black dark:text-white">Global skala</h3>
                  </div>
                  <div className="bg-white dark:bg-ascend-gray-800 rounded-xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
                    <p className="text-3xl font-bold text-ascend-orange">1,7 MSEK</p>
                    <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Omsättning per 30 dagar</p>
                  </div>
                </div>
              </div>
              <div className="relative md:flex items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-gradient-to-br from-ascend-orange/10 to-ascend-maize/10 dark:from-ascend-orange/20 dark:to-ascend-maize/20 rounded-xl p-6 border border-ascend-orange/20 md:ml-auto">
                    <p className="text-3xl font-bold text-ascend-orange">30 MSEK</p>
                    <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Mål årsomsättning 2026</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-ascend-maize rounded-full border-4 border-white dark:border-ascend-gray-900 md:-translate-x-1/2" />
                <div className="md:w-1/2 md:pl-12 pl-12 hidden md:block">
                  <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-2">Vision 2026</h3>
                  <p className="text-ascend-gray-600 dark:text-ascend-gray-400">Med fortsatt expansion i Europa siktar vi på att avsluta 2026 med en årsomsättning på 30 miljoner SEK.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-ascend-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-ascend-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Vill du uppnå liknande resultat?</h2>
          <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400 mb-8 max-w-2xl mx-auto">
            Låt oss diskutera hur vi kan hjälpa ditt företag att växa genom datadriven marknadsföring och strategisk digital utveckling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="btn-primary">Kontakta oss</button>
            <button onClick={() => navigate('/case')} className="btn-secondary">Se fler case</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseNordicFulfillment;
