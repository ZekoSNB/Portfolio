import { Link } from '@chakra-ui/react';


export function Header() {
  return (
    <header>
        <nav className='mt-header__nav'>
            <Link href="#">Home</Link>
            <Link href="#">About Me</Link>
            <Link href="#">Contact Me</Link>                
        </nav>
    </header>
  )
}
