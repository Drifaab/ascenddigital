import { ArrowLeft, FileText, Handshake, Zap, Scale } from 'lucide-react';

const PillarFlexiblaModeller = () => {
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
            <FileText size={14} className="text-ascend-orange" />
            <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">
              De tre pelarna
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-ascend-black dark:text-white mb-6">
            Flexibla Avtalsformer <span className="text-ascend-orange">byggda för skalning</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ascend-gray-600 dark:text-ascend-gray-400 mb-12">
            Fokus: Tydlighet, enkelhet och riskminimering för kunden.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-ascend-gray-700 dark:text-ascend-gray-300 leading-relaxed mb-8">
              Vi tror på samarbeten som bygger på resultat, inte på krångliga bindningstider. Våra modeller är utformade för att stödja din resa, oavsett om du är i en uppstartsfas eller ska skala internationellt.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-24 section-padding">
        <div className="container-wide max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ongoing Resource */}
            <div className="group p-8 bg-ascend-gray-50 dark:bg-ascend-gray-800 rounded-2xl border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Handshake size={24} className="text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-4">
                Löpande Resurs (Strategiskt partnerskap)
              </h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                Passar bolag som behöver en långsiktig tillväxtpartner som tar ägarskap över kanalerna. Fungerar med ett fast månadsarvode där vi agerar som er externa tillväxtchef.
              </p>
            </div>

            {/* Agile Project */}
            <div className="group p-8 bg-ascend-gray-50 dark:bg-ascend-gray-800 rounded-2xl border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Zap size={24} className="text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-4">
                Agilt Projekt (Lösningsbaserat)
              </h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                För specifika utmaningar eller tidsbegränsade satsningar. Vi sätter ett tydligt scope för en sprint eller ett projekt. Flexibelt, skalbart och med tydliga leverabler.
              </p>
            </div>

            {/* Transparency */}
            <div className="group p-8 bg-ascend-gray-50 dark:bg-ascend-gray-800 rounded-2xl border border-ascend-gray-100 dark:border-ascend-gray-700 md:col-span-2">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Scale size={24} className="text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-4">
                Resultat, inte bindningstider
              </h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                Våra avtal är utformade för att ge dig flexibilitet och kontroll. Inga långa uppsägningstider, inga dolda klausuler – bara ett gemensamt fokus på att driva resultat för din verksamhet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PillarFlexiblaModeller;
