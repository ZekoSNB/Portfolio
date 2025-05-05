import './styles/App.css'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import GeolocationComponent from './components/GeoLocationcomp';


function App() {

  return (
    <>
      <Header />
      <Hero />
      <GeolocationComponent />
    </>
  )
}

export default App
