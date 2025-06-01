import './styles/App.css';
import './styles/global.css';
import { Title } from './utils/Title';
import { CursorTrail } from './components/CursorTrail';
import { Hero } from './pages/Hero';

function App() {
  Title();
  
  return (
    <>
      <CursorTrail />
      <Hero />
    </>
  )
}

export default App;

