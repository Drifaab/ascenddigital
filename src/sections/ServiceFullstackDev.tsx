import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Code2,
  Zap,
  ShoppingCart,
  Target,
  ArrowRight,
  Layers,
  Cpu,
  Gauge,
} from "lucide-react";

const ServiceFullstackDev = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    {
      title: "Modern Webbutveckling",
      description:
        "Vi bygger blixtsnabba lösningar med fokus på Core Web Vitals vilket förbättrar både UX och SEO.",
      icon: <Zap size={24} />,
      tech: ["React", "Next.js", "TypeScript"],
    },
    {
      title: "E-handel & Integrationer",
      description:
        "Vi skapar sömlösa köpupplevelser och kopplar ihop din tech-stack för effektivare dataflöden.",
      icon: <ShoppingCart size={24} />,
      tech: ["Shopify", "WooCommerce", "Custom"],
    },
    {
      title: "Konverteringsoptimering (CRO)",
      description:
        "Vi utvecklar landningssidor som tekniskt maximerar effekten av din annonsering.",
      icon: <Target size={24} />,
      tech: ["A/B Testing", "Analytics", "UX Design"],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black pt-20 transition-colors">

      {/* HERO */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-ascend-gray-100 via-transparent to-ascend-orange/5" />

        <div className="max-w-6xl mx-auto py-16 md:py-24 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-gray-200 dark:bg-ascend-gray-700 rounded-full mb-6">
            <Code2 size={16} />
            <span className="text-sm font-medium">Teknik & utveckling</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Digital arkitektur byggd för hastighet, UX och försäljning
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-ascend-gray-600 dark:text-ascend-gray-400 max-w-3xl mx-auto leading-relaxed">
            Din webbplats eller e-handel är navet i din digitala tillväxt.
            Vi utvecklar moderna lösningar i React och Next.js där prestanda
            och användarupplevelse står i centrum.
          </p>

        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"].map(
            (tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-ascend-gray-800 rounded-lg border text-sm font-medium"
              >
                {tech}
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
            <p className="text-ascend-gray-600 dark:text-ascend-gray-400">
              Tekniska lösningar där varje komponent är optimerad för prestanda.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-ascend-gray-200 dark:bg-ascend-gray-700 rounded-xl flex items-center justify-center mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-ascend-gray-600 dark:text-ascend-gray-400 mb-4">
                  {feature.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {feature.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-ascend-gray-100 dark:bg-ascend-gray-700 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-ascend-orange/10 rounded-2xl flex items-center justify-center text-ascend-orange mx-auto mb-4">
              <Gauge size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Core Web Vitals</h3>
            <p className="text-sm text-ascend-gray-600">
              Optimerad för LCP, FID och CLS
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-ascend-orange/10 rounded-2xl flex items-center justify-center text-ascend-orange mx-auto mb-4">
              <Layers size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Skalbar arkitektur</h3>
            <p className="text-sm text-ascend-gray-600">
              Byggd för att växa utan prestandaförlust
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-ascend-orange/10 rounded-2xl flex items-center justify-center text-ascend-orange mx-auto mb-4">
              <Cpu size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Teknisk SEO</h3>
            <p className="text-sm text-ascend-gray-600">
              Semantisk markup och strukturerad data
            </p>
          </div>

        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-ascend-gray-50 dark:bg-ascend-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Så jobbar vi
          </h2>

          <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 sm:p-8 md:p-12 border">
            <p className="text-base sm:text-lg leading-relaxed text-ascend-gray-700 dark:text-ascend-gray-300">
              Vi arbetar iterativt med tydliga tekniska kravspecifikationer
              och kontinuerlig kvalitetssäkring. Varje kodrad skrivs med
              prestanda, skalbarhet och underhållbarhet i åtanke.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-pink-600 via-orange-500 to-ascend-orange">
         <div className="max-w-3xl mx-auto text-center">

       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Behöver ni en plattform som presterar?
          </h2>

         <p className="text-white/80 text-base sm:text-lg mb-8">
            Låt oss diskutera hur vi kan förbättra er digitala infrastruktur.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={() => navigate('/kontakt')}
className="bg-white text-pink-600 hover:bg-white/90 px-8 py-4 rounded-full flex items-center justify-center gap-2"            >
              Boka ett tekniskt strategisamtal
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

export default ServiceFullstackDev;