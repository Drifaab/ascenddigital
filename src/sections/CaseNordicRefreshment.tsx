import { ArrowLeft, Lightbulb, Handshake, Code2, TrendingUp, Users, Mail, BarChart3 } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useNavigate } from 'react-router-dom';

const CaseNordicRefreshment = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300 pt-20">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/10" />
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
                <span className="px-3 py-1 bg-ascend-orange/10 text-ascend-orange rounded-full text-xs font-medium">FMCG / Dryck</span>
                <span className="px-3 py-1 bg-ascend-gray-100 dark:bg-ascend-gray-800 text-ascend-gray-600 dark:text-ascend-gray-400 rounded-full text-xs font-medium">Delägare & Operativ partner</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ascend-black dark:text-white leading-tight">Nordic Refreshment</h1>
              <p className="text-xl md:text-2xl text-ascend-orange font-medium mt-4">Från idégrund till strategiskt helhetsansvar</p>
              <p className="mt-6 text-lg text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                Ascend Digital klev in i detta projekt inte bara som konsult, utan som idégrundare och delägare. Vi har lett den initiala produktresearchen för att identifiera exakt vilka högpresterande drycker och varumärken som skulle inkluderas för att skapa ett oslagbart erbjudande på marknaden.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Varumärken:</span>
                <span className="text-sm font-medium text-ascend-black dark:text-white">Nocco, Vitamin Well, Celsius, Barebells</span>
              </div>
            </div>
            <div className="relative">
              <img src="/images/case-nordic-refreshment.jpg" alt="Nordic Refreshment" className="rounded-2xl shadow-2xl w-full object-cover aspect-video" />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-ascend-gray-800 rounded-xl p-4 shadow-lg border border-ascend-gray-100 dark:border-ascend-gray-700 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-ascend-orange/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-ascend-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Vår roll</p>
                    <p className="text-lg font-bold text-ascend-black dark:text-white">Idégrundare & Delägare</p>
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
              <Lightbulb size={14} className="text-ascend-orange" />
              <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">Från idé till marknadsledande sortiment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Strategisk produktresearch</h2>
            <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400">
              Vi har lett den initiala produktresearchen för att identifiera exakt vilka högpresterande drycker och varumärken som skulle inkluderas för att skapa ett oslagbart erbjudande på marknaden.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Nocco', 'Vitamin Well', 'Celsius', 'Barebells'].map((brand, index) => (
              <div key={index} className="bg-white dark:bg-ascend-gray-800 rounded-xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700 text-center">
                <p className="text-lg font-semibold text-ascend-black dark:text-white">{brand}</p>
                <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Premium varumärke</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/10 rounded-full border border-ascend-orange/20 mb-6">
                <Handshake size={14} className="text-ascend-orange" />
                <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">Operativ Agilitet & Samarbete</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Ett skolboksexempel på effektivitet</h2>
              <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400 mb-6">
                Projektet drivs i ett tätt partnerskap med Nordic Fulfillment Group AB. Rollfördelningen är tydlig och effektiv.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-ascend-gray-50 dark:bg-ascend-gray-800/50 rounded-xl">
                  <div className="w-10 h-10 bg-ascend-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-ascend-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-ascend-black dark:text-white">Nordic Fulfillment Group</h4>
                    <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Äger projektet och hanterar all logistik och distribution.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-ascend-orange/5 dark:bg-ascend-orange/10 rounded-xl border border-ascend-orange/20">
                  <div className="w-10 h-10 bg-ascend-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-5 h-5 text-ascend-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-ascend-black dark:text-white">Ascend Digital</h4>
                    <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Bär det totala ansvaret för den digitala affären – från SEO och Sociala medier till Google Ads och strategisk affärsutveckling.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-8 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-6">Vårt helhetsansvar</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-ascend-gray-50 dark:bg-ascend-gray-700/50 rounded-xl text-center">
                  <BarChart3 className="w-6 h-6 text-ascend-orange mx-auto mb-2" />
                  <p className="text-sm font-medium text-ascend-black dark:text-white">SEO</p>
                </div>
                <div className="p-4 bg-ascend-gray-50 dark:bg-ascend-gray-700/50 rounded-xl text-center">
                  <TrendingUp className="w-6 h-6 text-ascend-orange mx-auto mb-2" />
                  <p className="text-sm font-medium text-ascend-black dark:text-white">Google Ads</p>
                </div>
                <div className="p-4 bg-ascend-gray-50 dark:bg-ascend-gray-700/50 rounded-xl text-center">
                  <Users className="w-6 h-6 text-ascend-orange mx-auto mb-2" />
                  <p className="text-sm font-medium text-ascend-black dark:text-white">Sociala medier</p>
                </div>
                <div className="p-4 bg-ascend-gray-50 dark:bg-ascend-gray-700/50 rounded-xl text-center">
                  <Lightbulb className="w-6 h-6 text-ascend-orange mx-auto mb-2" />
                  <p className="text-sm font-medium text-ascend-black dark:text-white">Affärsutveckling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ascend-gray-50 dark:bg-ascend-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Tekniskt & Strategiskt genomförande</h2>
            <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400">
              Som delägare har vi "skin in the game". Det innebär ett helhetstänk där vi inte bara optimerar kanaler, utan även utvecklar själva affärsmodellen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-3">Digital Infrastruktur</h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 text-sm leading-relaxed">
                Vi har tagit fram hemsidans hela struktur och SEO-arkitektur med ett djupt fokus på GEO (Generative Experience Optimization).
              </p>
            </div>
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-3">B2B & B2C-synergi</h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 text-sm leading-relaxed">
                Vi har byggt kampanjstrukturer som adresserar både den törstiga privatkonsumenten (B2C) och företag som behöver wholesale-lösningar (B2B).
              </p>
            </div>
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-3">Retention-hypotesen</h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 text-sm leading-relaxed">
                Precis som i våra mest framgångsrika case bygger Nordic Refreshment på hypotesen att återkommande kunder är nyckeln till hållbar lönsamhet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Helhetsansvar med "skin in the game"</h2>
            <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400">
              Som delägare har vi ett genuint intresse av projektets framgång. Vi identifierar ständigt nya produkter och marknadssegment som kan adderas för att accelerera tillväxten.
            </p>
          </div>
          <div className="bg-gradient-to-br from-ascend-orange/5 to-ascend-maize/5 dark:from-ascend-orange/10 dark:to-ascend-maize/10 rounded-2xl p-8 md:p-12 border border-ascend-orange/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-ascend-black dark:text-white mb-4">Vad innebär detta för dig?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-ascend-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-ascend-orange text-xs font-bold">✓</span>
                    </div>
                    <p className="text-ascend-gray-600 dark:text-ascend-gray-400">En partner som är lika investerad i framgång som du</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-ascend-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-ascend-orange text-xs font-bold">✓</span>
                    </div>
                    <p className="text-ascend-gray-600 dark:text-ascend-gray-400">Strategiskt tänk som går utöver traditionell konsulting</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-ascend-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-ascend-orange text-xs font-bold">✓</span>
                    </div>
                    <p className="text-ascend-gray-600 dark:text-ascend-gray-400">Kontinuerlig utveckling av affärsmodellen</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-ascend-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-ascend-orange text-xs font-bold">✓</span>
                    </div>
                    <p className="text-ascend-gray-600 dark:text-ascend-gray-400">Långsiktigt perspektiv på alla beslut</p>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-right">
                <p className="text-6xl md:text-7xl font-bold text-ascend-orange mb-2">
                  <AnimatedCounter value="100%" />
                </p>
                <p className="text-xl text-ascend-black dark:text-white font-medium">Engagemang</p>
                <p className="text-ascend-gray-500 dark:text-ascend-gray-400">När vi är med, är vi med på riktigt</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Vill du ha en partner som bryr sig?</h2>
          <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400 mb-8 max-w-2xl mx-auto">
            Oavsett om du söker en traditionell byrårelation eller ett djupare partnerskap, kan vi hjälpa dig att växa.
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

export default CaseNordicRefreshment;
