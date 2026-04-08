import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Search,
  TrendingUp,
  Globe,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const ServiceSemSeoGeo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    {
      title: "Precision i SEM",
      description:
        "Vi bygger och skalar Google Ads-kampanjer (Search, PMax, Shopping) med fokus på affärsvärde, oavsett om det gäller B2C-e-handel eller komplex B2B-lead-generering.",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Teknisk & Strategisk SEO",
      description:
        "Vi optimerar struktur, prestanda och innehåll för att bygga långsiktig auktoritet och organisk tillväxt.",
      icon: <Search size={24} />,
    },
    {
      title: "GEO (Generative Experience Optimization)",
      description:
        "Vi framtidssäkrar din närvaro genom att optimera innehåll för AI-drivna sökresultat och LLM-modeller.",
      icon: <Globe size={24} />,
    },
    {
      title: "Datakvalitet",
      description:
        "Vi säkrar korrekt spårning via GA4 och avancerad konverteringsspårning för att ge en sann bild av er ROI.",
      icon: <BarChart3 size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300 pt-16 md:pt-20">
      
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ascend-orange/5 via-transparent to-ascend-maize/5 dark:from-ascend-orange/10 dark:to-ascend-maize/5" />

        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/10 dark:bg-ascend-orange/20 rounded-full mb-6">
              <Search size={16} className="text-ascend-orange" />
              <span className="text-sm font-medium text-ascend-orange">
                Performance i Google
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ascend-black dark:text-white mb-6 leading-tight">
              Performance som dominerar hela sökresan
              <span className="block text-ascend-orange mt-2">
                SEO / SEM / GEO
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed max-w-3xl mx-auto">
              Vi hjälper ambitiösa bolag att äga sökresultatet i Google genom
              att integrera betald annonsering (SEM) med organisk synlighet
              (SEO) och generativa sökstrategier (GEO).
            </p>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-ascend-gray-50 dark:bg-ascend-gray-900/50 py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ascend-black dark:text-white mb-4">
              Vad vi gör
            </h2>
            <p className="text-ascend-gray-600 dark:text-ascend-gray-400">
              En helhetslösning för sökbarhet som täcker alla aspekter av modern
              sökmarknadsföring.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 md:p-8 border border-ascend-gray-100 dark:border-ascend-gray-700 hover:border-ascend-orange/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-ascend-orange/10 dark:bg-ascend-orange/20 rounded-xl flex items-center justify-center text-ascend-orange mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-ascend-black dark:text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm md:text-base text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ascend-black dark:text-white mb-8">
            Så jobbar vi
          </h2>

          <div className="bg-gradient-to-br from-ascend-orange/5 to-ascend-maize/5 dark:from-ascend-orange/10 dark:to-ascend-maize/5 rounded-2xl p-6 md:p-10 lg:p-12">

            <p className="text-base md:text-lg text-ascend-gray-700 dark:text-ascend-gray-300 leading-relaxed max-w-3xl mx-auto">
              Genom att sitta nära er verksamhet analyserar vi marknadssegment
              och vertikaler för att hitta de mest lönsamma möjligheterna.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-ascend-orange/10 rounded-full flex items-center justify-center text-ascend-orange mb-3">
                  <CheckCircle2 size={22} />
                </div>
                <p className="font-medium text-ascend-black dark:text-white">
                  Marknadsanalys
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-ascend-orange/10 rounded-full flex items-center justify-center text-ascend-orange mb-3">
                  <CheckCircle2 size={22} />
                </div>
                <p className="font-medium text-ascend-black dark:text-white">
                  Kontinuerlig mätning
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-ascend-orange/10 rounded-full flex items-center justify-center text-ascend-orange mb-3">
                  <CheckCircle2 size={22} />
                </div>
                <p className="font-medium text-ascend-black dark:text-white">
                  Snabb iteration
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-pink-600 via-orange-500 to-ascend-orange">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Är du redo att dominera sökresultaten?
          </h2>

          <p className="text-white/80 text-base sm:text-lg mb-8">
Låt oss göra en gratis audit av er nuvarande SEM/SEO-setup och
            identifiera era snabbaste vinster.          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={() => navigate('/kontakt')}
              className="bg-white text-pink-600 hover:bg-white/90 px-8 py-4 rounded-full flex items-center justify-center gap-2"
            >
              Boka en gratis analys
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => navigate('/')}
              className="px-8 py-4 border border-white/30 rounded-full text-white hover:bg-white/10"
            >
              Tillbaka till startsidan
            </button>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ServiceSemSeoGeo;