import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tjanster: [
      { label: 'SEM / SEO / GEO', href: '#' },
      { label: 'Paid Social', href: '#' },
      { label: 'Full-stack Development', href: '#' },
      { label: 'Agile Business Development', href: '#' },
    ],
    case: [
      { label: 'Nordic Fulfillment', href: '#' },
      { label: 'Nordic Bangers', href: '#' },
      { label: 'Nordic Refreshment', href: '#' },
      { label: 'Riad Cosmetics', href: '#' },
    ],
    omOss: [
      { label: 'Hur vi jobbar', href: '#process' },
      { label: 'Agilt Mindset', href: '#' },
      { label: 'Partnerskap', href: '#' },
      { label: 'Avtalsformer', href: '#' },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact" className="bg-ascend-black text-white">
      {/* CTA Section */}
      <div className="section-padding py-16 md:py-24 border-b border-white/10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
               Redo att växa{' '}
                <span className="text-ascend-orange">digitalt?</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                Låt oss prata om hur vi kan hjälpa dig att bygga, optimera och skala 
                din digitala närvaro med datadriven agilitet.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="mailto:hello@ascenddigital.tech"
                className="inline-flex items-center justify-center px-8 py-4 bg-ascend-orange text-white font-medium rounded-lg transition-all duration-200 hover:bg-ascend-orange/90 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Mail size={18} className="mr-2" />
                Maila oss
              </a>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-lg border border-white/20 transition-all duration-200 hover:bg-white/20"
              >
                Boka ett möte
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding py-12 md:py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <img
                src="/images/Ascend Digital logo - full - maize PNG_Rityta 1 (1).png"
                alt="Ascend Digital"
                className="h-10 w-auto mb-6"
              />
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                Vi bygger, optimerar och skalar din digitala närvaro med ett agilt 
                arbetssätt. Din partner för datadriven tillväxt.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:hello@ascenddigital.tech"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-ascend-orange transition-colors"
                >
                  <Mail size={16} />
                  hello@ascenddigital.tech
                </a>
                <a
                  href="tel:+46701234567"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-ascend-orange transition-colors"
                >
                  <Phone size={16} />
                  +46 70 123 45 67
                </a>
                <div className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  <span>Stockholm, Sverige</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Tjänster
              </h4>
              <ul className="space-y-3">
                {footerLinks.tjanster.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-white/60 hover:text-ascend-orange transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Case
              </h4>
              <ul className="space-y-3">
                {footerLinks.case.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-white/60 hover:text-ascend-orange transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Om Oss
              </h4>
              <ul className="space-y-3">
                {footerLinks.omOss.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-white/60 hover:text-ascend-orange transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-padding py-6 border-t border-white/10">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              {currentYear} Ascend Digital. Alla rättigheter förbehållna.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-ascend-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-sm text-white/40 hover:text-ascend-orange transition-colors"
              >
                Integritetspolicy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
