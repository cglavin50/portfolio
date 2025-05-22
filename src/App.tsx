import { useRef } from 'react';
import './App.css'
import Container from './components/Container';
import Landing from './components/Landing';
import ProjectsSection from './components/Projects';

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  return (
    <div className="h-[100vh] bg-off-black flex items-center justify-center p-4 sm:p-8 text-slate-200">
      <Container>
        <Landing projectsRef={projectsRef} />
        <ProjectsSection sectionRef={projectsRef} />
      </Container>
    </div>
  );
}

export default App
