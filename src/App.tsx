import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Philosophy } from './components/Philosophy';
import { Process } from './components/Process';
import { About } from './components/About';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BreakpointViewer } from './components/BreakpointViewer';

export function App() {
  return (
    <BreakpointViewer>
      <div className="portfolio-app">
        <Navbar />
        <main>
          <Hero />
          <SelectedWork />
          <Philosophy />
          <Process />
          <About />
          <CtaBanner />
        </main>
        <Footer />
      </div>
    </BreakpointViewer>
  );
}

export default App;
