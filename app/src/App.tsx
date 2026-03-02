import { useState, useEffect } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import CaseStudies from './sections/CaseStudies';
import Process from './sections/Process';
import Blog from './sections/Blog';
import Footer from './sections/Footer';

import CaseNordicFulfillment from './sections/CaseNordicFulfillment';
import CaseNordicBangers from './sections/CaseNordicBangers';
import CaseRiadCosmetics from './sections/CaseRiadCosmetics';
import CaseNordicRefreshment from './sections/CaseNordicRefreshment';

// Simple hash-based router
function getRoute() {
  return window.location.hash.slice(1) || '/';
}

function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = getRoute();
      setRoute(newRoute);
      // Scroll to top when navigating to a new page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation handler for components
  const handleNavigate = (href: string) => {
    if (href.startsWith('#')) {
      window.location.hash = href.slice(1);
    } else {
      window.location.hash = href;
    }
  };

  // Case study pages
  if (route === '/case/nordic-fulfillment') {
    return (
      <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300">
        <Navigation />
        <CaseNordicFulfillment onNavigate={handleNavigate} />
        <Footer />
      </div>
    );
  }

  if (route === '/case/nordic-bangers') {
    return (
      <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300">
        <Navigation />
        <CaseNordicBangers onNavigate={handleNavigate} />
        <Footer />
      </div>
    );
  }

  if (route === '/case/riad-cosmetics') {
    return (
      <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300">
        <Navigation />
        <CaseRiadCosmetics onNavigate={handleNavigate} />
        <Footer />
      </div>
    );
  }

  if (route === '/case/nordic-refreshment') {
    return (
      <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300">
        <Navigation />
        <CaseNordicRefreshment onNavigate={handleNavigate} />
        <Footer />
      </div>
    );
  }



  // Home page (default)
  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <CaseStudies onNavigate={handleNavigate} />
        <Process />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
