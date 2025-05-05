import './styles/App.css'
import { Text, Box, Heading} from '@chakra-ui/react'
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'


function App() {

  return (
    <>
      <section style={{ backgroundColor: 'black', padding: '20px', display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Heading as={"h1"} color={'white'} size={"5xl"}>MAROŠ TOMAŠOV</Heading>
        <Text textAlign={"center"} fontSize="2xl" color={"white"} fontWeight={600}>To som ja! Len finančne negramotný človek.</Text>
        <Box display={"grid"} gridTemplateColumns={"repeat(6, 1fr)"} alignItems={"center"} justifyContent={"center"} mt={4} columnGap={4} rowGap={4}>
            <a href="https://instagram.com/_ozeko" target="_blank" rel="noopener noreferrer">
              <FaInstagram color="white" size={48} />
            </a>
            {/* <a href="https://www.facebook.com/MarosSNB/" target="_blank" rel="noopener noreferrer">
              <FaFacebook color="white" size={48} />
            </a> */}
            <a href="https://www.linkedin.com/in/maro%C5%A1-toma%C5%A1ov/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color="white" size={48} />
            </a>
            <a href="https://www.youtube.com/@oZekoo" target="_blank" rel="noopener noreferrer">
              <FaYoutube color="white" size={48} />
            </a>
            <a href="https://github.com/ZekoSNB" target="_blank" rel="noopener noreferrer">
              <FaGithub color="white" size={48} />
            </a>
            <a href="https://wakatime.com/@Zeko" target="_blank" rel="noopener noreferrer">
              <img src="/wakatime.svg" alt='wakatime' width={48} height={48} color='white' />
            </a>
            <a href="https://whatpulse.org/ozeko_" target="_blank" rel="noopener noreferrer">
              <img src="https://whatpulse.org/assets/images/logo-white.png" alt='wakatime' width={48} height={48} color='white' />
            </a>
        </Box>
      </section>
    </>
  )
}

export default App

