import './styles/App.css';
import './styles/global.css';
import { Title } from './utils/Title';
import { CursorTrail } from './components/CursorTrail';
import { Hero } from './pages/Hero';
import { LeadSection } from './pages/Lead';

function App() {
  Title();
  
  return (
    <>
      <CursorTrail />
      <Hero />
      <LeadSection />
    </>
  )
}

export default App;

