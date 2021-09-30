import React from 'react'
// import { Link } from 'react-router-dom'

const About = () => {

  return (
    <section className='about'>
      <div className='container'>
        <article className='article'>
          <h2>About the Green Plate Project</h2>
          <p>intro bit</p>
        </article>

        <article className='article'>
          <h2>Environmental factors</h2>
          <p>could we do an intro to the environmental factors here (maybe with images and links to each)?</p>
        </article>

        <article className='article'>
          <h2>The team</h2>
          <div className='team-profile-container'>
            <div className='team-profile' id='Megan'>
              <img src="#" alt="Megan" />
              <p>Megan info here</p>
            </div>
            <div className='team-profile' id='Victor'>
              <img src="#" alt="Victor" />
              <p>Victor info here</p>
            </div>
            <div className='team-profile' id='Kate'>
              <img src="#" alt="Kate" />
              <p>Kate info here</p>
            </div>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default About