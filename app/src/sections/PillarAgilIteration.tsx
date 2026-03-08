import { ArrowLeft, RefreshCw, Target, Clock, Users } from 'lucide-react';

const PillarAgilIteration = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-ascend-black/95 backdrop-blur-md border-b border-ascend-gray-100 dark:border-ascend-gray-800">
        <div className="container-wide px-6 h-16 flex items-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm font-medium text-ascend-gray-600 dark:text-ascend-gray-400 hover:text-ascend-orange transition-colors"
          >
            <ArrowLeft size={16} />
            Tillbaka
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container-wide max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/5 dark:bg-ascend-orange/10 rounded-full border border-ascend-orange/10 dark:border-ascend-orange/20 mb-6">
            <RefreshCw size={14} className="text-ascend-orange" />
            <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">
              De tre pelarna
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-ascend-black dark:text-white mb-6">
            Ett Agilt Mindset för <span className="text-ascend-orange">verklig tillväxt</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ascend-gray-600 dark:text-ascend-gray-400 mb-12">
            Fokus: Snabbhet, relevans och datadrivna beslut.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-ascend-gray-700 dark:text-ascend-gray-300 leading-relaxed mb-8">
              Agilitet för oss handlar inte om att tvinga in dig i strikta Scrum-möten. Det handlar om att vara responsiv inför marknadens förändringar.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-24 section-padding">
        <div className="container-wide max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hypothesis Methodology */}
            <div className="group p-8 bg-ascend-gray-50 dark:bg-ascend-gray-800 rounded-2xl border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Target size={24} className="text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-4">
                Hypotesstyrd metodik
              </h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                Vi utgår från din faktiska data för att formulera hypoteser. Vi testar, mäter och skalar det som fungerar, samtidigt som vi snabbt dödar det som inte ger effekt.
              </p>
            </div>

            {/* Iterative Cycles */}
            <div className="group p-8 bg-ascend-gray-50 dark:bg-ascend-gray-800 rounded-2xl border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Clock size={24} className="text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-4">
                Iterativa cykler (1–2 veckor)
              </h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                Vi arbetar i korta sprintar. Detta ger oss flexibiliteten att skifta fokus om en ny möjlighet dyker upp eller om datan pekar i en ny riktning.
              </p>
            </div>

            {/* Full Transparency */}
            <div className="group p-8 bg-ascend-gray-50 dark:bg-ascend-gray-800 rounded-2xl border border-ascend-gray-100 dark:border-ascend-gray-700 md:col-span-2">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Users size={24} className="text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-4">
                Full transparens & Samarbete
              </h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                Vi jobbar nära dig. Du har full insyn i vår gemensamma backlog och ser precis vad vi prioriterar och varför. Inga dolda timmar, bara fokus på KPI-påverkan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PillarAgilIteration;
