import "./styles/App.css";
import "./styles/global.css";
import { Title } from "./utils/Title";
import { CursorTrail } from "./components/CursorTrail";
import { Hero } from "./pages/Hero";
import { LeadSection } from "./pages/Lead";
import { DadJoke } from "./components/DadJokeOTD";
import ChromeDinoGame from "react-chrome-dino";

function App() {
  Title();

  return (
    <>
      <CursorTrail />
      <DadJoke />
      <Hero />
      <LeadSection />
    </>
  );
}

export default App;
