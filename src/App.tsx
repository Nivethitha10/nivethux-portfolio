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

export function App() {
  const isAboutPage = window.location.pathname === '/about';
  const isWorkPage = window.location.pathname === '/work';
  const isContactPage = window.location.pathname === '/contact';
  const isContactSentPage = window.location.pathname === '/contact-sent' || window.location.pathname === '/contact/sent';
  const isProject1Page = window.location.pathname === '/project-1';
  const isProject2Page = window.location.pathname === '/project-2';
  const isProject3Page = window.location.pathname === '/project-3';
  const isProject4Page = window.location.pathname === '/project-4';
  const isHomePage = window.location.pathname === '/';
  const isSiteAssetsPage = window.location.pathname === '/site-assets';

  return (
    <div className="portfolio-app">
      <Navbar />
      {isAboutPage ? <AboutPage /> : isWorkPage ? <WorkPage /> : isContactSentPage ? <ContactSentPage /> : isContactPage ? <ContactPage /> : isProject1Page ? <Project1 /> : isProject2Page ? <Project2 /> : isProject3Page ? <Project3 /> : isProject4Page ? <GolfProject /> : isSiteAssetsPage ? <SiteAssetsPage /> : isHomePage ? (
        <main>
          <Hero />
          <SelectedWork />
          <Philosophy />
          <Process />
          <About />
          <CtaBanner />
        </main>
      ) : <ErrorPage />}
      <Footer />
    </div>
  );
}

export default App;
