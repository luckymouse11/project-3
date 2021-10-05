import React from 'react'
// import { Link } from 'react-router-dom'

// will we have an individual page for each of co2, water, land
// if yes, wrap each with e.g. Link exact path='/water'
// if no, wrap whole article with Link exact path='environmentalfactor'
// -> should link to the info page

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
          <p>NOTES TO EDIT--94% of mammal biomass (the total quantity of animals on the planet), excluding humans, is livestock. This means livestock outweigh wild mammals by a factor of 15-to-1.4 Of the 28,000 species evaluated to be threatened with extinction on the IUCN Red List, agriculture and aquaculture is listed as a threat for 24,000 of them. Food, therefore, lies at the heart of trying to tackle climate change, reducing water stress, pollution, restoring lands back to forests or grasslands, and protecting the world’s wildlife</p>
          <div className='environmental-factors d-flex'>
            <div className='co2'>
              <img src='../src/images/about-co2-image.png' alt='co2-image'/>
              <p>some facts about how co2 levels is influenced by agricultural farming</p>
              <ul>
                <li>fact 1</li>
                <li>fact 2</li>
                <li>fact 3</li>
              </ul>
            </div>
            <div className='water'>
              <img src='../images/about-water-image.png' alt='water-image'/>
              <p>some facts about how co2 levels is influenced by agricultural farming</p>
              <ul>
                <li>fact 1</li>
                <li>fact 2</li>
                <li>fact 3</li>
              </ul>
            </div>
            <div className='land'>
              <img src='./images/about-land-image.png' alt='land-image'/>
              <p>some facts about how co2 levels is influenced by agricultural farming</p>
              <ul>
                <li>fact 1</li>
                <li>fact 2</li>
                <li>fact 3</li>
              </ul>
            </div>
          </div>
        </article>

        <article className='article'>
          <h2>The team</h2>
          <div className='team-profile-container mt-2 row g-3'>
            <div className='team-profile col-12 col-md-6 col-lg-4' id='Megan'>
              <h4>Megan Sowa</h4>
              <img src="#" alt="Megan" />
              <p>Megan info here</p>
            </div>
            <div className='team-profile col-12 col-md-6 col-lg-4' id='Victor'>
              <h4>Victor Liew</h4>
              <img src="#" alt="Victor" />
              <p>Victor info here</p>
            </div>
            <div className='team-profile col-12 col-md-6 col-lg-4' id='Kate'>
              <h4>Kate Westbrook</h4>
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