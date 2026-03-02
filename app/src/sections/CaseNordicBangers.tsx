import { ArrowLeft, TrendingUp, Zap, ShoppingCart, RefreshCw, Sparkles, Mail, BarChart3 } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

interface CaseNordicBangersProps {
  onNavigate: (href: string) => void;
}

const CaseNordicBangers = ({ onNavigate }: CaseNordicBangersProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300 pt-20">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-ascend-orange/10" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => onNavigate('#case')} className="inline-flex items-center gap-2 text-sm text-ascend-gray-600 dark:text-ascend-gray-400 hover:text-ascend-orange transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till case
          </button>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-ascend-orange/10 text-ascend-orange rounded-full text-xs font-medium">Konfektyr (B2B & B2C)</span>
                <span className="px-3 py-1 bg-ascend-gray-100 dark:bg-ascend-gray-800 text-ascend-gray-600 dark:text-ascend-gray-400 rounded-full text-xs font-medium">Svenskt lösgodis</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ascend-black dark:text-white leading-tight">Nordic Bangers</h1>
              <p className="text-xl md:text-2xl text-ascend-orange font-medium mt-4">Wholesale-succé i en föränderlig värld</p>
              <p className="mt-6 text-lg text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                Från nisch till wholesale-ledare inom trendigt svenskt lösgodis. Genom strategisk Google Ads-skalning och djupt SEO-arbete har vi etablerat varumärket som en av de tyngsta spelarna inom den globala "Bubs Wholesale"-industrin.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Nisch:</span>
                <span className="text-sm font-medium text-ascend-black dark:text-white">Bubs, Veganskt, Halal</span>
              </div>
            </div>
            <div className="relative">
              <img src="/images/case-nordic-bangers.jpg" alt="Nordic Bangers" className="rounded-2xl shadow-2xl w-full object-cover aspect-video" />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-ascend-gray-800 rounded-xl p-4 shadow-lg border border-ascend-gray-100 dark:border-ascend-gray-700 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-ascend-orange/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-ascend-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Resultat</p>
                    <p className="text-lg font-bold text-ascend-black dark:text-white">Wholesale-ledare</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ascend-gray-50 dark:bg-ascend-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/10 rounded-full border border-ascend-orange/20 mb-6">
              <Zap size={14} className="text-ascend-orange" />
              <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">Strategiskt genombrott</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Från nisch till Wholesale-ledare</h2>
            <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400">
              Vi har skalat Google Ads-kontot från dag ett med ett särskilt fokus på B2B-segmentet. Genom ett djupt SEO-arbete har vi etablerat varumärket som en av de tyngsta spelarna inom den globala "Bubs Wholesale"-industrin.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700 text-center">
              <div className="w-16 h-16 bg-ascend-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-ascend-orange" />
              </div>
              <h3 className="text-lg font-semibold text-ascend-black dark:text-white mb-2">B2B-fokuserad skalning</h3>
              <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Strategisk inriktning mot wholesale-kunder från första dagen</p>
            </div>
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700 text-center">
              <div className="w-16 h-16 bg-ascend-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-ascend-orange" />
              </div>
              <h3 className="text-lg font-semibold text-ascend-black dark:text-white mb-2">SEO-dominans</h3>
              <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Toppositioner för "Bubs Wholesale" och relaterade termer</p>
            </div>
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700 text-center">
              <div className="w-16 h-16 bg-ascend-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-ascend-orange" />
              </div>
              <h3 className="text-lg font-semibold text-ascend-black dark:text-white mb-2">Global räckvidd</h3>
              <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Storköpare från hela världen attraherade</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Teknisk setup & Remarketing</h2>
              <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400 mb-6">
                Vi har byggt en robust infrastruktur för spårning och använder kundmatchningslistor för att driva extremt träffsäker remarketing, vilket fångar upp både engångsköpare och stora B2B-kunder.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ascend-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-ascend-orange text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-ascend-black dark:text-white">Avancerad spårning</h4>
                    <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Robust infrastruktur för att mäta varje kundinteraktion</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ascend-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-ascend-orange text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-ascend-black dark:text-white">Kundmatchning</h4>
                    <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Träffsäkra listor för precis remarketing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ascend-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-ascend-orange text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-ascend-black dark:text-white">B2B & B2C-synnergi</h4>
                    <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Strategier som fångar både storköpare och konsumenter</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-8 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-6">Kampanjstruktur</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-ascend-gray-50 dark:bg-ascend-gray-700/50 rounded-xl">
                  <div className="w-10 h-10 bg-ascend-orange/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-ascend-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-ascend-black dark:text-white">Performance Max</p>
                    <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Fokus på storsäljare som Bubs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-ascend-gray-50 dark:bg-ascend-gray-700/50 rounded-xl">
                  <div className="w-10 h-10 bg-ascend-orange/10 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-ascend-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-ascend-black dark:text-white">Wholesale-kampanjer</p>
                    <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Dedikerade kampanjer för storköpare</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ascend-gray-50 dark:bg-ascend-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/10 rounded-full border border-ascend-orange/20 mb-6">
              <RefreshCw size={14} className="text-ascend-orange" />
              <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">Agilitet & Marknadsförståelse</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Navigering av handelshinder</h2>
            <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400">
              En kritisk del av framgången har varit vårt nära samarbete med kunden för att hantera makroekonomiska förändringar, såsom de exporttariffer som infördes vid handel med USA.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-3">Snabb strategisk omprioritering</h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 text-sm leading-relaxed">
                Genom att snabbt skifta budskap och strategi har vi kunnat bibehålla momentum trots ändrade spelregler och nya handelshinder.
              </p>
            </div>
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-3">Innehåll & AI</h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 text-sm leading-relaxed">
                Vi använder Assets Studio och AI-verktyg för att kontinuerligt producera och testa nytt kreativt material för Demand Gen, vilket håller annonseringen fräsch och relevant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-ascend-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-ascend-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Redo att dominera din marknad?</h2>
          <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400 mb-8 max-w-2xl mx-auto">
            Låt oss visa hur vi kan hjälpa ditt företag att navigera marknadsförändringar och bygga en hållbar digital närvaro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('#contact')} className="btn-primary">Kontakta oss</button>
            <button onClick={() => onNavigate('#case')} className="btn-secondary">Se fler case</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseNordicBangers;
