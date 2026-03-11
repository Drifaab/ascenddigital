import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MapPin, Send, CheckCircle, Building2, User, Briefcase, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const subject = encodeURIComponent(`Kontktförfrågan från ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(
      `Namn: ${formData.name}\n` +
      `Företag: ${formData.company}\n` +
      `E-post: ${formData.email}\n\n` +
      `Meddelande:\n${formData.message}`
    );

    // Open email client
    window.location.href = `mailto:hello@ascenddigital.tech?subject=${subject}&body=${body}`;

    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300 pt-20">
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center justify-center min-[calc(100vh-5rem)]">
          <div className="absolute inset-0 bg-gradient-to-br from-ascend-orange/5 via-transparent to-ascend-maize/10" />
          
          <div className="relative max-w-2xl mx-auto text-center py-20 md:py-32">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-ascend-black dark:text-white">
              Tack för ditt meddelande!
            </h1>
            
            <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400 mb-4 max-w-lg mx-auto leading-relaxed">
              Vi har tagit emot din förfrågan och återkommer så snart vi kan. 
              Vanligtvis svarar vi inom 24 timmar.
            </p>
            
            <p className="text-ascend-gray-500 dark:text-ascend-gray-500 mb-10">
              Ett email har öppnats i din standard email-klient. Om det inte fungerade, 
              maila oss direkt på{' '}
              <a href="mailto:hello@ascenddigital.tech" className="text-ascend-orange hover:underline">
                hello@ascenddigital.tech
              </a>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="btn-primary"
              >
                Tillbaka till startsidan
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', company: '', email: '', message: '' });
                }}
                className="btn-secondary"
              >
                Skicka ett till meddelande
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300 pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-ascend-orange/5 via-transparent to-ascend-maize/10" />

        <div className="max-w-6xl mx-auto py-12 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/10 rounded-full mb-6">
              <Mail size={16} className="text-ascend-orange" />
              <span className="text-sm font-medium text-ascend-orange">Kontakt</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-ascend-black dark:text-white">
              Låt oss prata om{' '}
              <span className="text-ascend-orange">din tillväxt</span>
            </h1>

           
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* FORM */}
            <div className="lg:col-span-3">
              <div className="bg-ascend-gray-50 dark:bg-ascend-gray-800/50 rounded-3xl p-6 sm:p-8 md:p-10">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-ascend-black dark:text-white">
                  Skicka ett meddelande
                </h2>
                
                <p className="text-ascend-gray-600 dark:text-ascend-gray-400 mb-8 text-sm sm:text-base leading-relaxed">
                  Skicka in ett meddelande och beskriv ditt ärende. Ge oss gärna lite 
                  kontext kring vad ni är ute efter, ert business case och vilka mål 
                  ni hoppas uppnå.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Company Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ascend-gray-700 dark:text-ascend-gray-300 mb-2">
                        <span className="flex items-center gap-2">
                          <User size={16} className="text-ascend-orange" />
                          Namn
                        </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-ascend-gray-200 dark:border-ascend-gray-700 bg-white dark:bg-ascend-gray-800 text-ascend-black dark:text-white placeholder-ascend-gray-400 focus:outline-none focus:ring-2 focus:ring-ascend-orange/50 focus:border-ascend-orange transition-all"
                        placeholder="Ditt namn"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-ascend-gray-700 dark:text-ascend-gray-300 mb-2">
                        <span className="flex items-center gap-2">
                          <Building2 size={16} className="text-ascend-orange" />
                          Företag
                        </span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-ascend-gray-200 dark:border-ascend-gray-700 bg-white dark:bg-ascend-gray-800 text-ascend-black dark:text-white placeholder-ascend-gray-400 focus:outline-none focus:ring-2 focus:ring-ascend-orange/50 focus:border-ascend-orange transition-all"
                        placeholder="Företagsnamn"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ascend-gray-700 dark:text-ascend-gray-300 mb-2">
                      <span className="flex items-center gap-2">
                        <Mail size={16} className="text-ascend-orange" />
                        E-post
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-ascend-gray-200 dark:border-ascend-gray-700 bg-white dark:bg-ascend-gray-800 text-ascend-black dark:text-white placeholder-ascend-gray-400 focus:outline-none focus:ring-2 focus:ring-ascend-orange/50 focus:border-ascend-orange transition-all"
                      placeholder="din@email.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ascend-gray-700 dark:text-ascend-gray-300 mb-2">
                      <span className="flex items-center gap-2">
                        <MessageSquare size={16} className="text-ascend-orange" />
                        Meddelande / Kontext
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-ascend-gray-200 dark:border-ascend-gray-700 bg-white dark:bg-ascend-gray-800 text-ascend-black dark:text-white placeholder-ascend-gray-400 focus:outline-none focus:ring-2 focus:ring-ascend-orange/50 focus:border-ascend-orange transition-all resize-none"
                      placeholder="Beskriv ditt ärende, ert business case och vilka mål ni hoppas uppnå..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto btn-primary px-8 py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Skickar...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Skicka meddelande
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* INFO SIDEBAR */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Company Info Card */}
                <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-ascend-orange/10 rounded-xl flex items-center justify-center">
                      <Briefcase size={20} className="text-ascend-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ascend-black dark:text-white">
                        Företagsinformation
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-ascend-gray-500 dark:text-ascend-gray-500 uppercase tracking-wider mb-1">
                        Företagsnamn
                      </p>
                      <p className="text-ascend-black dark:text-white font-medium">
                        ASCENDDIGITAL OÜ
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-ascend-gray-500 dark:text-ascend-gray-500 uppercase tracking-wider mb-1">
                        E-post
                      </p>
                      <a 
                        href="mailto:hello@ascenddigital.tech"
                        className="text-ascend-orange hover:underline font-medium"
                      >
                        hello@ascenddigital.tech
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-white dark:bg-ascend-gray-800 rounded-2xl p-6 border border-ascend-gray-100 dark:border-ascend-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-ascend-orange/10 rounded-xl flex items-center justify-center">
                      <MapPin size={20} className="text-ascend-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ascend-black dark:text-white">
                        Här finns vi
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-ascend-gray-500 dark:text-ascend-gray-500 uppercase tracking-wider mb-1">
                        Registrerad adress
                      </p>
                      <p className="text-ascend-gray-700 dark:text-ascend-gray-300 leading-relaxed">
                        Harju maakond, Tallinn,<br />
                        Kesklinna linnaosa,<br />
                        Narva mnt 5, 10117, Estland
                      </p>
                    </div>

                    <div className="pt-4 border-t border-ascend-gray-100 dark:border-ascend-gray-700">
                      <p className="text-xs text-ascend-gray-500 dark:text-ascend-gray-500 uppercase tracking-wider mb-1">
                        Regional bas
                      </p>
                      <p className="text-ascend-gray-700 dark:text-ascend-gray-300">
                        Baserad i Barcelona, Katalonien
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact CTA */}
                <div className="bg-gradient-to-br from-ascend-orange to-ascend-orange/80 rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-2">
                    Föredrar du att maila direkt?
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Skicka ett email till oss så svarar vi så snart vi kan.
                  </p>
                  <a 
                    href="mailto:hello@ascenddigital.tech"
                    className="inline-flex items-center gap-2 text-white font-medium hover:underline"
                  >
                    <Mail size={16} />
                    hello@ascenddigital.tech
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
