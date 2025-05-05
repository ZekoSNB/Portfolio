import './styles/App.css'
import { Title } from './utils/Title';
import { Text, Heading} from '@chakra-ui/react';
import { Navigation } from './components/Navigation';
import { CursorTrail } from './components/CursorTrail';
import { GithubCalendarComp } from './components/GithubCalendar';
import { Password } from './components/Password';


function App() {
  Title();
  return (
    <>
      <CursorTrail />
      <section style={{ backgroundColor: 'black', padding: '20px', display: 'flex', height: '100dvh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Heading as={"h1"} textAlign={"center"} color={'white'} size={{
          base: "4xl",
          md: "6xl",
        }}>MAROŠ TOMAŠOV</Heading>
        <Text textAlign={"center"} fontSize={{
          base: "xl",
          md: "3xl"
        }} color={"white"} fontWeight={600}>To som ja! Len finančne negramotný človek.</Text>
        <Navigation />
        <Heading className='calendar__heading' as={"h2"} mt={8} mb={0.5} textAlign={"center"} color={'white'} size={{
          base: "xl",
          md: "2xl",
        }}>GitHub Contributions</Heading>
        <GithubCalendarComp />
        <Password />
      </section>
    </>
  )
}

export default App;

