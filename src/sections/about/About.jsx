import './about.css'
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data.js'
import React from 'react'

const About = () => {
  return (
    <section id="about" data-aos='fade-in'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className='about__card'>
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Hi, my name is Kevin Espina. I am a full stack developer. I have 5+ years of experience in project management 
            and 2 years of experience in software development. I have solved 50+ data structures/algorithm question through
            Leetcode. I love building challenging projects that grow my skills and implementing new technologies.
          </p>
          <p>
            When I am not coding, you can find me in the great outdoors. On my free time, I enjoy boxing, rock climbing, 
            playing pickleball and chess. I enjoy trying new activities, learning and am always motivated to do more!
          </p>
          <a href={CV} className='btn primary' >Download CV <HiDownload/></a>
        </div>
      </div>

    </section>
  )
}

export default About