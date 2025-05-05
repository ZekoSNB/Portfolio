import './styles/App.css'
import { GithubCalendarComp } from './components/GithubCalendar'
import { Title } from './utils/Title';
import { Text, Box, Heading} from '@chakra-ui/react'
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'
import { CursorTrail } from './components/CursorTrail'

function App() {
  Title();
  return (
    <>
      <CursorTrail />
      <section style={{ backgroundColor: 'black', padding: '20px', display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Heading as={"h1"} textAlign={"center"} color={'white'} size={{
          base: "4xl",
          md: "6xl",
        }}>MAROŠ TOMAŠOV</Heading>
        <Text textAlign={"center"} fontSize={{
          base: "xl",
          md: "3xl"
        }} color={"white"} fontWeight={600}>To som ja! Len finančne negramotný človek.</Text>
        <Box display={"grid"} gridTemplateColumns={{
          base: "repeat(4, 1fr)",
          md: "repeat(8, 1fr)",
        }} alignItems={"center"} justifyContent={"center"} mt={4} columnGap={4} rowGap={8}>
            <a href="https://instagram.com/_ozeko" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='social-icon' color="white" size={48} />
            </a>
            <a href="https://www.linkedin.com/in/maro%C5%A1-toma%C5%A1ov/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='social-icon' color="white" size={48} />
            </a>
            <a href="https://www.youtube.com/@oZekoo" target="_blank" rel="noopener noreferrer">
              <FaYoutube className='social-icon' color="white" size={52} />
            </a>
            <a href="https://github.com/ZekoSNB" target="_blank" rel="noopener noreferrer">
              <FaGithub className='social-icon' color="white" size={48} />
            </a>
            <a href="https://wakatime.com/@Zeko" target="_blank" rel="noopener noreferrer">
              <img className='social-icon' src="/wakatime.svg" alt='wakatime' width={48} height={48}/>
            </a>
            <a href="https://whatpulse.org/ozeko_" target="_blank" rel="noopener noreferrer">
              <img className='social-icon' src="https://whatpulse.org/assets/images/logo-white.png" alt='wakatime' width={44} height={44} color='white' />
            </a>
            <a href="https://open.spotify.com/user/maros384?si=b00cd58cd5ee4232" target="_blank" rel="noopener noreferrer">
              <img className='social-icon' src="/spotify.svg" alt='spotify' width={48} height={48} />
            </a>
            <a href="https://www.tiktok.com/@_ozeko" target="_blank" rel="noopener noreferrer">
              <img className='social-icon' src="/tiktok.svg" alt='spotify' width={48} height={48} />
            </a>
        </Box>
      <GithubCalendarComp />
      </section>
    </>
  )
}

export default App;

