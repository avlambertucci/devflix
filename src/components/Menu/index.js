import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import '../Menu/Menu.css'

import Button from '../Buttons'

function Menu(){
    return(
        <nav className='Menu'>
          <Link to="/">
            <img className="Logo" src={Logo} alt="devflixlogo" />
          </Link>

          <Button as={Link} className="ButtonLink" to="/cadastro/video">
              Novo vídeo
          </Button>    
         
        </nav>
    );
}

export default Menu