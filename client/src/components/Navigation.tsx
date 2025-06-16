import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';

export function Navigation() {
  return (
     <Box display={"grid"} gridTemplateColumns={{
          base: "repeat(4, 1fr)",
          md: "repeat(8, 1fr)",
        }} alignItems={"center"} justifyContent={"center"} mt={4} columnGap={4} rowGap={8}>
            <a href="https://instagram.com/_ozeko"  target="_blank" rel="noopener noreferrer">
              <FaInstagram className='social-icon' title='Instagram' color="white" size={48} />
            </a>
            <a href="https://www.linkedin.com/in/maro%C5%A1-toma%C5%A1ov/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='social-icon' color="white" size={48} title='Linkedin' />
            </a>
            <a href="https://www.youtube.com/@oZekoo" target="_blank" rel="noopener noreferrer">
              <FaYoutube className='social-icon' color="white" size={52} title='Youtube' />
            </a>
            <a href="https://github.com/ZekoSNB" target="_blank" rel="noopener noreferrer">
              <FaGithub className='social-icon' color="white" size={48} title='Github' />
            </a>
            <a href="https://wakatime.com/@Zeko" target="_blank" rel="noopener noreferrer">
              <img className='social-icon' src="/wakatime.svg" alt='wakatime' width={48} height={48} title='Wakatime'/>
            </a>
            <a href="https://whatpulse.org/ozeko_" target="_blank" rel="noopener noreferrer">
              <img className='social-icon' src="https://whatpulse.org/assets/images/logo-white.png" alt='whatpulse' title='Whatpulse' width={44} height={44} color='white' />
            </a>
            <a href="https://open.spotify.com/user/maros384?si=b00cd58cd5ee4232" target="_blank" rel="noopener noreferrer">
              <img className='social-icon' src="/spotify.svg" alt='spotify' width={48} height={48} title='Spotify' />
            </a>
            <a href="https://www.tiktok.com/@_ozeko" target="_blank" rel="noopener noreferrer">
              <img className='social-icon' src="/tiktok.svg" alt='tiktok' width={48} height={48} title='TikTok' />
            </a>
    </Box>
  )
}
