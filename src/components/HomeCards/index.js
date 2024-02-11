import React from 'react'
// import {Button} from '../ButtonElements'
// import Collaborate from'../../../images/Community_Initiatives.png'
// import Educate from'../../../images/MantleExplorer.png'
// import { useNavigate } from 'react-router-dom';
import shelter from "../../assets/images/shelter.png.png" 
import bot from "../../assets/images/bot.png" 
import blog from "../../assets/images/blog.png" 
import { AboutContainer, AboutWrapper,  AboutCard, AboutIcon, AboutH2, AboutP } from './InfoElements'

export const About = () => {

  return (
    <>
      <AboutContainer>
        {/* <AboutH1>What We Do</AboutH1> */}
        <AboutWrapper>
          {/* <Linked to='/collaboratePage'> */}
          <AboutCard >
          <AboutIcon src={bot}></AboutIcon>
          <AboutH2>Taara Bot</AboutH2>
          <AboutP>Your guide and friend </AboutP>
          </AboutCard> 
          {/* </Linked> */}
          {/* <Linked to='/sponsorPage'> */}
          <AboutCard>
          <AboutIcon src={blog}></AboutIcon>
          <AboutH2>BLOGS</AboutH2>
          <AboutP>Let's get motivated </AboutP>
          </AboutCard>
          <AboutCard>
          <AboutIcon src={shelter}></AboutIcon>
          <AboutH2>SHELTER</AboutH2>
          <AboutP>A safe place</AboutP>
          </AboutCard>
          <AboutCard>
          <AboutIcon src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"></AboutIcon>
          <AboutH2>JOBS</AboutH2>
          <AboutP>Be self independent</AboutP>
          </AboutCard>
          {/* </Linked>  */}
        </AboutWrapper>

      </AboutContainer>
    </>
  )
}
