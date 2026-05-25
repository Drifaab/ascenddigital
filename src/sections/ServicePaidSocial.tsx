import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Share2, Megaphone, Sparkles, Funnel, ArrowRight, Zap } from "lucide-react";

const ServicePaidSocial = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    {
      title: "Multikanal-strategi",
      description:
        "Vi anpassar budskap och format efter kanalens logik oavsett om målet är B2C-försäljning eller B2B-beslutsstöd.",
      icon: <Megaphone size={24} />,
    },
    {
      title: "Kreativt Testramverk",
      description:
        "Systematiska tester av hooks, angles och format för att hitta vinnande koncept och sänka CAC.",
      icon: <Sparkles size={24} />,
    },
    {
      title: "Full-Funnel Optimering",
      description:
        "Kampanjstrukturer som leder användaren från awareness till konvertering genom retargeting och prospecting.",
      icon: <Funnel size={24} />,
    },
  ];

  const platforms = [
    { name: "Meta", sub: "Facebook & Instagram", color: "bg-blue-500" },
    { name: "TikTok", sub: "Short-form video", color: "bg-pink-500" },
    { name: "LinkedIn", sub: "B2B marketing", color: "bg-sky-700" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black pt-20 transition-colors">

      {/* HERO */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-orange-500/5" />

        <div className="max-w-6xl mx-auto py-16 md:py-24 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 rounded-full mb-6">
            <Share2 size={16} className="text-pink-500" />
            <span className="text-sm font-medium text-pink-500">
              Sociala medier
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-ascend-black dark:text-white">
            Kreativ strategi som bryter igenom bruset
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-ascend-gray-600 dark:text-ascend-gray-400 max-w-3xl mx-auto leading-relaxed">
            I sociala medier räcker det inte att synas – du måste engagera
            och konvertera. Vi kombinerar teknisk expertis med kreativ
            testmetodik för att bygga högpresterande annonsering.
          </p>

        </div>
      </section>

      {/* PLATFORMS */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">

          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-ascend-gray-800 rounded-full border shadow-sm"
            >
              <div className={`w-3 h-3 rounded-full ${platform.color}`} />
              <span className="font-semibold text-ascend-black dark:text-white">
                {platform.name}
              </span>
              <span className="text-sm text-ascend-gray-500">
                {platform.sub}
              </span>
            </div>
          ))}

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-ascend-gray-50 dark:bg-ascend-gray-900/50">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-ascend-black dark:text-white">
              Vad vi gör
            </h2>
            <p className="text-ascend-gray-600 dark:text-ascend-gray-400">
              Kreativ performance där varje krona optimeras mot affärsmål.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-500 mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-ascend-black dark:text-white">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-ascend-gray-600 dark:text-ascend-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-ascend-black dark:text-white">
            Så jobbar vi
          </h2>

          <div className="bg-gradient-to-br from-pink-500/5 via-orange-500/5 rounded-2xl p-6 sm:p-8 md:p-12">

            <p className="text-base sm:text-lg leading-relaxed text-ascend-gray-700 dark:text-ascend-gray-300">
              Vi börjar alltid med en djup analys av målgrupp och kreativa
              tillgångar. Genom snabba testcykler och kontinuerlig analys
              identifierar vi vilka kreativa element som driver konvertering.
            </p>

            <div className="grid gap-6 sm:grid-cols-3 mt-10">

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <Zap size={24} />
                </div>
                <p className="font-medium">Snabba testcykler</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <Sparkles size={24} />
                </div>
                <p className="font-medium">Kreativ analys</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <ArrowRight size={24} />
                </div>
                <p className="font-medium">ROI-optimering</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-pink-600 via-orange-500 to-ascend-orange">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Dags att få sociala medier att leverera ROI?
          </h2>

          <p className="text-white/80 text-base sm:text-lg mb-8">
            Låt oss bygga en kreativ strategi som faktiskt konverterar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={() => navigate('/kontakt')}
              className="bg-white text-pink-600 hover:bg-white/90 px-8 py-4 rounded-full flex items-center justify-center gap-2"
            >
              Starta en kreativ testkampanj
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

export default ServicePaidSocial;