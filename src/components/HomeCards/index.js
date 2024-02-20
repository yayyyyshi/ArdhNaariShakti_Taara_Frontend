import React from 'react'
// import {Button} from '../ButtonElements'
// import Collaborate from'../../../images/Community_Initiatives.png'
// import Educate from'../../../images/MantleExplorer.png'
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import shelter from "../../assets/images/shelter.png.png" 
import bot from "../../assets/images/bot.png" 
import blog from "../../assets/images/blog.png" 
import jobs from "../../assets/images/jobs.png" 
import { AboutContainer, AboutWrapper,  AboutCard, AboutIcon, AboutH2, AboutP } from './InfoElements'

export const About = () => {

  return (
    <>
      <AboutContainer>
        {/* <AboutH1>What We Do</AboutH1> */}
        <AboutWrapper>
        <Link to="https://mediafiles.botpress.cloud/5778def2-9ee0-4b3f-990f-97f5df404e60/webchat/bot.html">
          <AboutCard >
          <AboutIcon src={bot}></AboutIcon>
          <AboutH2>Taara Bot</AboutH2>
          <AboutP>Your guide and friend </AboutP>
          </AboutCard> 
          </Link>
          <Link to='/blogs'>
          <AboutCard>
          <AboutIcon src={blog}></AboutIcon>
          <AboutH2>BLOGS</AboutH2>
          <AboutP>Let's get motivated </AboutP>
          </AboutCard>
          </Link>
          <Link to='/shelter'>
          <AboutCard>
          <AboutIcon src={shelter}></AboutIcon>
          <AboutH2>SHELTER</AboutH2>
          <AboutP>A safe place</AboutP>
          </AboutCard>
          </Link>
          <Link to='/jobs'>
          <AboutCard>
          <AboutIcon src={jobs}></AboutIcon>
          <AboutH2>JOBS</AboutH2>
          <AboutP>Be self independent</AboutP>
          </AboutCard>
          </Link>
        </AboutWrapper>

      </AboutContainer>
    </>
  )
}
