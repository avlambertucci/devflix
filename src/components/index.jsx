import React from 'react'
import Logo from '../assets/img/Logo.png'
import './Menu.css'
// import ButtonLink from '../components/Menu/components/ButtonLink'
import Button from '../components/Buttons'

function Menu(){
    return(
        <nav className='Menu'>
          <a href="/">
            <img className="Logo" src={Logo} alt="devflixlogo" />
          </a>
          <Button className="ButtonLink" href="/">
              Novo vídeo
          </Button>    
         
        </nav>
    );
}

export default Menu