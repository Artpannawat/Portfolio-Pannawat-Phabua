import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { ParticleBackground } from './components/ParticleBackground';

export default function App() {
  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
        {/* Navigation Bar */}
        <NavBar />

        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(10,10,15,1))]" />
          <div className="absolute inset-0 opacity-30" 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 212, 255, 0.15) 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          />
          <ParticleBackground />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Hero />
          <About />
          <ProjectsGrid />
          <Experience />
          <TechStack />
          <Footer />
        </div>
      </div>
    </>
  );
}
