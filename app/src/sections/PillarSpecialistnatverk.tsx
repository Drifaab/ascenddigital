import { ArrowLeft, Network, Code2, Palette, BarChart3 } from 'lucide-react';

const PillarSpecialistnatverk = () => {
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
            <Network size={14} className="text-ascend-orange" />
            <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">
              De tre pelarna
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-ascend-black dark:text-white mb-6">
            Partnerskap & <span className="text-ascend-orange">Specialistnätverk</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ascend-gray-600 dark:text-ascend-gray-400 mb-12">
            Fokus: Ascend som strategisk hjärna med tillgång till expertmuskler.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-ascend-gray-700 dark:text-ascend-gray-300 leading-relaxed mb-8">
              Varje kundresa är unik. Därför har vi byggt ett ekosystem av handplockade experter som vi aktiverar när ditt projekt kräver det. Vi tar helhetsansvaret och koordinerar arbetet så att du slipper hantera flera olika partners.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-24 section-padding">
        <div className="container-wide max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tech & Development */}
            <div className="group p-8 bg-ascend-gray-50 dark:bg-ascend-gray-800 rounded-2xl border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Code2 size={24} className="text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-4">
                Tech & Systemutveckling
              </h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed text-sm">
                Vi har nära samarbeten med seniora full-stack-utvecklare. Ser vi att din konvertering hämmas av teknisk skuld eller långsamma laddtider, kopplar vi på resurser som löser det direkt.
              </p>
            </div>

            {/* Design & Branding */}
            <div className="group p-8 bg-ascend-gray-50 dark:bg-ascend-gray-800 rounded-2xl border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Palette size={24} className="text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-4">
                Design & Performance Branding
              </h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed text-sm">
                Vi arbetar med designers som förstår balansen mellan estetik och konvertering. Oavsett om det gäller en ny visuell identitet eller högpresterande annonskreativ, säkerställer vi att designen stöttar affärsmålen.
              </p>
            </div>

            {/* Holistic Measurement */}
            <div className="group p-8 bg-ascend-gray-50 dark:bg-ascend-gray-800 rounded-2xl border border-ascend-gray-100 dark:border-ascend-gray-700">
              <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-ascend-orange" />
              </div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-4">
                Holistisk mätning
              </h3>
              <p className="text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed text-sm">
                Vi mäter kontinuerligt över alla kanaler (Omnichannel) för att få en fullständig bild av hur olika insatser påverkar varandra, oavsett vertikal eller marknadssegment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PillarSpecialistnatverk;
