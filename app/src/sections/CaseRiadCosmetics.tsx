import { ArrowLeft, Sparkles, MapPin, Search, TrendingUp, Mail, BarChart3 } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useNavigate } from 'react-router-dom';

const CaseRiadCosmetics = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300 pt-20">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-rose-500/10" />
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
                <span className="px-3 py-1 bg-ascend-orange/10 text-ascend-orange rounded-full text-xs font-medium">Skönhet & Lifestyle</span>
                <span className="px-3 py-1 bg-ascend-gray-100 dark:bg-ascend-gray-800 text-ascend-gray-600 dark:text-ascend-gray-400 rounded-full text-xs font-medium">Marockansk parfym</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ascend-black dark:text-white leading-tight">Riad Cosmetics</h1>
              <p className="text-xl md:text-2xl text-ascend-orange font-medium mt-4">Omnichannel-strategi för exklusiv parfym</p>
              <p className="mt-6 text-lg text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                Riad Cosmetics är inte bara en e-handel; det är ett varumärke med rötter i Marockos doftkultur och en stark fysisk närvaro genom flera butiker runt om i Sverige. Vi skapade en enhetlig digital närvaro som både driver online-konvertering och fysiska butiksbesök.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">Fokus:</span>
                <span className="text-sm font-medium text-ascend-black dark:text-white">Omnichannel-synergi mellan digitalt och fysiskt</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 md:p-6 bg-white dark:bg-ascend-gray-800 rounded-xl shadow-sm border border-ascend-gray-100 dark:border-ascend-gray-700">
                <p className="text-2xl md:text-3xl font-bold text-ascend-orange"><AnimatedCounter value="12x" /></p>
                <p className="mt-1 text-sm font-medium text-ascend-black dark:text-white">ROAS</p>
                <p className="text-xs text-ascend-gray-400 dark:text-ascend-gray-500">Avkastning på annonskrona</p>
              </div>
              <div className="p-5 md:p-6 bg-white dark:bg-ascend-gray-800 rounded-xl shadow-sm border border-ascend-gray-100 dark:border-ascend-gray-700">
                <p className="text-2xl md:text-3xl font-bold text-ascend-orange"><AnimatedCounter value="50+" /></p>
                <p className="mt-1 text-sm font-medium text-ascend-black dark:text-white">Butiker</p>
                <p className="text-xs text-ascend-gray-400 dark:text-ascend-gray-500">Fysisk närvaro i Sverige</p>
              </div>
              <div className="p-5 md:p-6 bg-white dark:bg-ascend-gray-800 rounded-xl shadow-sm border border-ascend-gray-100 dark:border-ascend-gray-700">
                <p className="text-2xl md:text-3xl font-bold text-ascend-orange"><AnimatedCounter value="+400%" /></p>
                <p className="mt-1 text-sm font-medium text-ascend-black dark:text-white">Budgetökning</p>
                <p className="text-xs text-ascend-gray-400 dark:text-ascend-gray-500">Skalbar tillväxt</p>
              </div>
              <div className="p-5 md:p-6 bg-white dark:bg-ascend-gray-800 rounded-xl shadow-sm border border-ascend-gray-100 dark:border-ascend-gray-700">
                <p className="text-2xl md:text-3xl font-bold text-ascend-orange"><AnimatedCounter value="100%" /></p>
                <p className="mt-1 text-sm font-medium text-ascend-black dark:text-white">Förstahandsdata</p>
                <p className="text-xs text-ascend-gray-400 dark:text-ascend-gray-500">Datadriven optimering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ascend-gray-50 dark:bg-ascend-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/10 rounded-full border border-ascend-orange/20 mb-6">
              <BarChart3 size={14} className="text-ascend-orange" />
              <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">Datadriven Performance Max</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Kraften av förstahandsdata</h2>
            <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400">
              Vi implementerade avancerade Performance Max-kampanjer som utgår från en gedigen databakgrund. Genom att mata Google Ads-kontot med förstahandsdata och kundlistor har vi kunnat bygga en extremt kraftfull remarketing-motor.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-ascend-orange" />
              </div>
              <h3 className="text-lg font-semibold text-ascend-black dark:text-white mb-2">Precision i nåendet</h3>
              <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Når inte bara nya kunder, utan återaktiverar tidigare besökare med hög precision.</p>
            </div>
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-ascend-orange" />
              </div>
              <h3 className="text-lg font-semibold text-ascend-black dark:text-white mb-2">Skalbarhet</h3>
              <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Budgetökning med 400% samtidigt som vi bibehöll och förbättrat ROAS.</p>
            </div>
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-ascend-orange" />
              </div>
              <h3 className="text-lg font-semibold text-ascend-black dark:text-white mb-2">Lokal relevans</h3>
              <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Kampanjer optimerade för att driva trafik till över 50 fysiska butiker.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/10 rounded-full border border-ascend-orange/20 mb-6">
                <Search size={14} className="text-ascend-orange" />
                <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">SEO & Digital Auktoritet</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Etablerad auktoritet inom lyxparfym</h2>
              <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400 mb-6">
                I nära samarbete med Riad Cosmetics har vi utvecklat en långsiktig SEO-strategi för att etablera varumärket som en auktoritet inom nischad lyxparfym.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ascend-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-ascend-orange text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-ascend-black dark:text-white">Optimering för köpintention</h4>
                    <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Fokus på sökord med hög köpintention och kommersiell relevans.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ascend-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-ascend-orange text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-ascend-black dark:text-white">Innehållsstruktur</h4>
                    <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Uppbyggnad av innehåll som besvarar kundernas frågor kring doftnoter och ursprung.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ascend-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-ascend-orange text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-ascend-black dark:text-white">GEO-fokus</h4>
                    <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Säkerställer att Riad Cosmetics är det självklara svaret i framtidens generativa sökresultat.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-8 border border-ascend-gray-100 dark:border-ascend-gray-700">
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-6">Resultat</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-ascend-gray-50 dark:bg-ascend-gray-700/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-ascend-orange" />
                    <span className="text-ascend-black dark:text-white">Synlighet i sökresan</span>
                  </div>
                  <span className="text-ascend-orange font-semibold">Ökad</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-ascend-gray-50 dark:bg-ascend-gray-700/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-ascend-orange" />
                    <span className="text-ascend-black dark:text-white">Butiksbesök</span>
                  </div>
                  <span className="text-ascend-orange font-semibold">Stärkt koppling</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-ascend-gray-50 dark:bg-ascend-gray-700/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-ascend-orange" />
                    <span className="text-ascend-black dark:text-white">Digital auktoritet</span>
                  </div>
                  <span className="text-ascend-orange font-semibold">Etablerad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ascend-gray-50 dark:bg-ascend-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Omnichannel-synergi</h2>
            <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400">
              Utmaningen var att skapa en enhetlig digital närvaro som både driver online-konvertering och fysiska butiksbesök. Resultatet är en sömlös upplevelse oavsett var kunden möter varumärket.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-ascend-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-ascend-orange">1</span>
              </div>
              <h3 className="text-lg font-semibold text-ascend-black dark:text-white mb-2">Online-upptäckt</h3>
              <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Kunden hittar Riad Cosmetics genom sök, sociala medier eller annonser.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-ascend-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-ascend-orange">2</span>
              </div>
              <h3 className="text-lg font-semibold text-ascend-black dark:text-white mb-2">Engagemang</h3>
              <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Innehåll om doftnoter och Marockos kultur bygger relation och intresse.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-ascend-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-ascend-orange">3</span>
              </div>
              <h3 className="text-lg font-semibold text-ascend-black dark:text-white mb-2">Konvertering</h3>
              <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400">Köp online eller besök i närmaste butik för att uppleva dofterna.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-ascend-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-ascend-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ascend-black dark:text-white mb-6">Ska vi skapa din omnichannel-strategi?</h2>
          <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400 mb-8 max-w-2xl mx-auto">
            Oavsett om du har fysiska butiker eller är pure-play e-handel, kan vi hjälpa dig att bygga en datadriven strategi som ger resultat.
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

export default CaseRiadCosmetics;
