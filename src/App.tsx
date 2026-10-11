import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Philosophy } from './components/Philosophy';
import { Process } from './components/Process';
import { About } from './components/About';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { Project1 } from './components/Project1';
import { Project2 } from './components/Project2';
import { Project3 } from './components/Project3';
import { GolfProject } from './components/GolfProject';
import { WorkPage } from './components/WorkPage';
import { ContactPage } from './components/ContactPage';
import { ContactSentPage } from './components/ContactSentPage';
import { ErrorPage } from './components/ErrorPage';
import { SiteAssetsPage } from './components/SiteAssetsPage';
import { routes } from './routes';

export function App() {
  const pathname = window.location.pathname;
  const page = pathname === routes.about ? <AboutPage />
    : pathname === routes.work ? <WorkPage />
    : pathname === routes.contact ? <ContactPage />
    : pathname === routes.contactThankYou ? <ContactSentPage />
    : pathname === routes.enterpriseBanking ? <Project1 />
    : pathname === routes.warehouseOperations ? <Project2 />
    : pathname === routes.agtechStripTest ? <Project3 />
    : pathname === routes.golfApp ? <GolfProject />
    : pathname === routes.siteAssets ? <SiteAssetsPage />
    : pathname === routes.home ? (
      <main>
        <Hero />
        <SelectedWork />
        <Philosophy />
        <Process />
        <About />
        <CtaBanner />
      </main>
    ) : <ErrorPage />;

  return (
    <div className="portfolio-app">
      <Navbar />
      {page}
      <Footer />
    </div>
  );
}

export default App;
