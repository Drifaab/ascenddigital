import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  RefreshCw,
  TrendingUp,
  Settings,
  Compass,
  ArrowRight,
  Clock,
  Users,
  Target,
} from "lucide-react";

const ServiceAgileBizDev = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    {
      title: "Tillväxtanalys",
      description:
        'Vi identifierar var i din "growth engine" som tillväxten bromsas och sätter in rätt åtgärder.',
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Processoptimering",
      description:
        "Vi hjälper team att prioritera i korta cykler (1–2 veckor) för att säkerställa att resurser läggs där de gör mest nytta.",
      icon: <Settings size={24} />,
    },
    {
      title: "Strategiskt Beslutsstöd",
      description:
        "Vi fungerar som en agil partner som hjälper er att navigera i marknadssegment, prissättning och konkurrensanalys.",
      icon: <Compass size={24} />,
    },
  ];

  const approachSteps = [
    {
      icon: <Clock size={20} />,
      title: "Korta sprintar",
      desc: "1-2 veckors cykler för snabb återkoppling",
    },
    {
      icon: <Target size={20} />,
      title: "Hypotesdrivet",
      desc: "Tydliga hypoteser och mätbara mål",
    },
    {
      icon: <Users size={20} />,
      title: "Embedded partner",
      desc: "Vi sitter nära er verksamhet",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300 pt-20">
      
      {/* HERO */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-ascend-maize/10 via-transparent to-ascend-orange/5" />

        <div className="max-w-6xl mx-auto py-16 md:py-24 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-maize/20 rounded-full mb-6">
            <RefreshCw size={16} />
            <span className="text-sm font-medium">Arbetssätt</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Agilt ledarskap för datadriven tillväxt
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-ascend-gray-600 max-w-3xl mx-auto leading-relaxed">
            I en snabbrörlig digital värld vinner de bolag som kan ställa om
            snabbast. Vi hjälper er att arbeta mer iterativt och datadrivet
            genom att applicera en agil filosofi på hela er affärsutveckling.
          </p>
        </div>
      </section>

      {/* APPROACH TAGS */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 sm:gap-4">
          {["Iterativt", "Datadrivet", "Fokuserat", "Skalbart", "Transparent"].map(
            (item, index) => (
              <span
                key={index}
                className="px-5 py-2 text-sm sm:text-base bg-ascend-maize/10 rounded-full font-semibold"
              >
                {item}
              </span>
            )
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-ascend-gray-50 dark:bg-ascend-gray-900/50">
        <div className="max-w-6xl mx-auto">

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Vad vi gör
            </h2>
            <p className="text-ascend-gray-600">
              Strategisk acceleration som skapar verklig förändring.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-ascend-maize/20 rounded-xl flex items-center justify-center mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-ascend-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
            Vårt arbetssätt
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-ascend-maize to-ascend-orange rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {step.icon}
                </div>

                <h3 className="font-semibold mb-1">{step.title}</h3>

                <p className="text-sm text-ascend-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-ascend-gray-50 dark:bg-ascend-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Så jobbar vi
          </h2>

          <div className="bg-gradient-to-br from-ascend-maize/10 to-ascend-orange/5 rounded-2xl p-6 sm:p-8 md:p-12">
            <p className="text-base sm:text-lg leading-relaxed text-ascend-gray-700">
              Vi embeddar oss i er organisation och arbetar sida vid sida med
              ledning och team. Genom strukturerade sprintar och tydliga
              hypoteser skapar vi en kultur av lärande och snabb anpassning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
       <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-pink-600 via-orange-500 to-ascend-orange">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Vill ni accelerera er tillväxt?
          </h2>

          <p className="text-white/80 text-base sm:text-lg mb-8">
            Låt oss kartlägga era största tillväxthinder.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={() => navigate('/kontakt')}
              className="bg-white text-pink-600 hover:bg-white/90 px-8 py-4 rounded-full flex items-center justify-center gap-2"
            >
              Boka en tillväxtdiagnos
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

export default ServiceAgileBizDev;