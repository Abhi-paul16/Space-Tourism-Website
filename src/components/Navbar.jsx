import React from 'react'
import styled from 'styled-components'
import logo from "../images/shared/logo.svg"
const Navbar = () => {
    return (
        <Nav>
            <a href="{#}">
            <img src={logo} alt="" />
            </a>

            <Menu>
              <a href="{#}"> 00 Home </a>
              <a href="{#}"> 01 Destination </a>
              <a href="{#}"> 02 Crew  </a>
              <a href="{#}"> 03 Technology </a>
            </Menu>
        </Nav>
    )
}


const Nav = styled.div`
    display: flex;
    justify-content: space-between;
 
    position: fixed;
       top: 0;
       left: 0;
       right: 0;
`

const Menu = styled.div`
    
    width: 50%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba( 208, 214, 249, 0.2 );
  
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    
    a{
        color: white;
        text-transform: uppercase;
        font-family: 'Barlow Condensed', sans-serif;
    }
`

export default Navbar
