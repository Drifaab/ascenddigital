import { ArrowRight, TrendingUp, Zap, Target } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-ascend-black transition-colors duration-300 px-4 sm:px-6">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Elements - Hidden on small screens */}
      <div className="hidden md:block absolute top-1/4 right-0 w-96 h-96 bg-ascend-maize/10 dark:bg-ascend-maize/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="hidden md:block absolute bottom-1/4 left-0 w-80 h-80 bg-ascend-orange/5 dark:bg-ascend-orange/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative z-10 w-full max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-gray-50 dark:bg-ascend-gray-800 rounded-full border border-ascend-gray-100 dark:border-ascend-gray-700">
              <span className="w-2 h-2 bg-ascend-orange rounded-full animate-pulse" />
              <span className="text-xs font-medium text-ascend-gray-600 dark:text-ascend-gray-400 uppercase tracking-wider">
                Digital Byrå
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ascend-black dark:text-white leading-tight">
              Digital tillväxt <br />
              genom <span className="text-ascend-orange">datadriven</span> agilitet
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-ascend-gray-500 dark:text-ascend-gray-400 max-w-xl mx-auto lg:mx-0">
              Vi bygger, optimerar och skalar din digitala närvaro med ett agilt arbetssätt.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('#case')}
                className="btn-primary flex items-center justify-center"
              >
                Se våra case
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => scrollToSection('#process')}
                className="btn-secondary"
              >
                Läs om vår process
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8 border-t border-ascend-gray-100 dark:border-ascend-gray-800">
              <div>
                <p className="text-2xl sm:text-3xl font-bold">1000%</p>
                <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">
                  Omsättningsökning
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold">5+</p>
                <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">
                  Års erfarenhet
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold">50+</p>
                <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">
                  Genomförda projekt
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Logo */}
            <img
              src="/images/Ascend Digital logo - A - maize PNG_Rityta 1.png"
              alt="Ascend Digital Logo"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />

            {/* Floating Cards - Hidden on small devices */}
            <div className="hidden sm:block absolute -top-6 -right-6 bg-white dark:bg-ascend-gray-800 rounded-xl shadow-lg p-4">
              <div className="flex items-center gap-3">
                <TrendingUp size={20} className="text-ascend-orange" />
                <div>
                  <p className="text-xs text-ascend-gray-500">ROAS</p>
                  <p className="font-bold">+450%</p>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white dark:bg-ascend-gray-800 rounded-xl shadow-lg p-4">
              <div className="flex items-center gap-3">
                <Zap size={20} />
                <div>
                  <p className="text-xs text-ascend-gray-500">Hastighet</p>
                  <p className="font-bold">Agilt</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white dark:bg-ascend-gray-800 rounded-xl shadow-lg p-4">
              <div className="flex items-center gap-3">
                <Target size={20} />
                <div>
                  <p className="text-xs text-ascend-gray-500">Fokus</p>
                  <p className="font-bold">KPI:er</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-ascend-gray-300 dark:border-ascend-gray-600 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-ascend-orange rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;