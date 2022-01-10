
import React ,{useState} from 'react'
import styled from 'styled-components'

//framer motion
import { motion } from 'framer-motion';

//icons
import logo from "../images/shared/logo.svg"
import hamburger from "../images/shared/icon-hamburger.svg"
import close from "../images/shared/icon-close.svg"
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [burgerStatus , setBurgerStatus] = useState(false);

    return (
        <Nav>
            <a href="{#}">
            <img src={logo} alt="" />
            </a>

            <Smalline>

           </Smalline>

            <Menu>
                <motion.div >
                <Link to=''> 00 Home  </Link>
              <Line initial = {{width: "0"}}  transition={{duration:1}} animate={{width:"100%"}} />
                </motion.div>
             <div>
              <Link to="Destination"> 01 Destination</Link>
              <Line initial = {{width: "0"}}  transition={{duration:1}} animate={{width:"100%"}} />

             </div>
              <Link to="" > 02 Crew      </Link>
              <Link to="" > 03 Technology </Link>

            </Menu>


            <RightMenu onClick={()=>{setBurgerStatus(true)}}>
                <img src={hamburger} alt="" />
            </RightMenu>
            <BurgerNav show={burgerStatus} >
            <CloseWrapper onClick={()=>{setBurgerStatus(false)}} >
                <img src={close}  alt='close'/>
                </CloseWrapper>
                <ul><li><a href="{#}"> <span> 00 </span> Home </a></li></ul>
                <ul><li><a href="{#}"> <span> 01 </span> Destination</a></li></ul>
                <ul><li><a href="{#}"> <span> 02 </span> Crew </a></li></ul>
                <ul><li><a href="{#}"> <span> 03 </span> Technology </a></li></ul>
            </BurgerNav>
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
       Link{
           display: flex;
           align-items: center;
           margin-left: 10px;
          
       }
  
`

const Smalline = styled.div`
     position: absolute;
     bottom: 0;
     top: 5vh;
    left: 7%;
    width: 40%;
    height: 1px;
    background-color: #d0d6f9;
    opacity: 0.5;
    z-index: 1;
    @media (max-width: 1000px) {
        display: none;
    }

`

const Menu = styled.div`
    
    width: 55%;
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
        font-size: 20px;
        word-spacing: 1px;
        letter-spacing: 1.5px;
        height: 10vh;
       display: flex; 
       align-items: center;
    }

    @media (max-width: 1000px) {
        display: none;
    }
  
`
const Line = styled(motion.div)`
       width: 0%;
       height: 3px;
       background-color: #ffffff;
 
`
const RightMenu = styled.div`
       display: none;
       cursor: pointer;
    @media (max-width: 1000px) {
        display: block;
        margin-right: 10px;
    }
`

const BurgerNav = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   width: 60%;
   z-index: 100;
   padding: 20px;
   background: rgba( 11, 13, 23, 0.05 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20px );
transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
   transition: transform 0.4s ease-in;
   li{
       padding: 15px 0;
       list-style: none;
       a{
           font-weight: 600;
           text-transform: uppercase;
           color: white;
           font-size: 24px;
       }
       span{
           font-weight: 900;
           margin-right: 12px;
       }
   }
`
const CloseWrapper = styled.div`
    text-align: end;
    cursor: pointer;
`


export default Navbar
