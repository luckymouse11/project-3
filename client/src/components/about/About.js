import React from 'react'
import { Link } from 'react-router-dom'

// will we have an individual page for each of co2, water, land
// if yes, wrap each with e.g. Link exact path='/water'
// if no, wrap whole article with Link exact path='environmentalfactor'
// -> should link to the info page

const About = () => {

  return (
    <section className='about mt-4'>
      <div className='container'>
        <article className='article'>
          <h2>About</h2>
          <p>How Green is Your Plate is a recipe website with an eco twist. We illustrate the environmental impact of your meal, helping you make greener choices - saving the planet one plate at a time!</p>
        </article>

        <article className='article mt-4'>
          <h2>Environmental Factors</h2>
          <p>There are 5 main environmental factors to consider when filling up your plate:</p>
          <div className='environmental-factors d-flex'>
            <div className='co2 mt-4'>
              <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432484/Green%20Plate/co2-image_txzm1d.svg' alt='co2-image'/>
              <p>Carbon Footprint</p>
            </div>
            <div className='land mt-4'>
              <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432484/Green%20Plate/land-use_dki2em.png' alt='land-image'/>
              <p>Land Use</p>
            </div>
            <div className='water mt-4'>
              <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432324/Green%20Plate/water-image_seblhm.png' alt='water-image'/>
              <p>Water Use</p>
            </div>
            <div className='water-pollution mt-4'>
              <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432570/Green%20Plate/Screenshot_2021-10-05_at_12.16.00_jf1kjx.png' alt='pollution-image'/>
              <p>Water Pollution</p>
            </div>
            <div className='water-scarcity mt-4'>
              <img src='https://res.cloudinary.com/mesowa/image/upload/v1633432613/Green%20Plate/Screenshot_2021-10-05_at_12.16.43_vuhbc4.png' alt='scarcity-image'/>
              <p>Water Scarcity</p>
            </div>
          </div>
          <Link to="/environmentalfactors" className="btn btn-primary mb-4 orange-button-about add-recipe-button mt-4">Learn More About Environmental Factors</Link>
        </article>

        <article className='article mt-4'>
          <h2>The Team</h2>
          <div className='team-profile-container mt-2 row g-3'>
            <div className='team-profile col-12 col-md-6 col-lg-4 mt-4' id='Kate'>
              <h4>Kate Westbrook</h4>
              <div className='about-profile-pic'>
                <img src="https://res.cloudinary.com/dysirhng8/image/upload/v1633606669/54840272_yi1kcf.jpg" alt="Kate" />
              </div>
              <div className='link-pic'>
                <a href='https://github.com/kate-lab'>
                  <img src='https://res.cloudinary.com/yl/image/upload/v1633551817/github_duwsnq.png' alt='GitHub'/>
                </a>
                <a href='https://www.linkedin.com/in/katewestbrook/'>
                  <img src='https://res.cloudinary.com/yl/image/upload/v1633553148/linkedin_fir0qe.png' alt='LinkedIn'/>
                </a>
              </div>
            </div>
            <div className='team-profile col-12 col-md-6 col-lg-4 mt-4' id='Victor'>
              <h4>Victor Liew</h4>
              <div className='about-profile-pic'>
                <img src='https://res.cloudinary.com/yl/image/upload/v1633555873/IMG_20210718_234843_921_pdxsw3.jpg' alt='Victor' />
              </div>
              <div className='link-pic'>
                <a href='https://github.com/luckymouse11'>
                  <img src='https://res.cloudinary.com/yl/image/upload/v1633551817/github_duwsnq.png' alt='GitHub'/>
                </a>
                <a href='https://www.linkedin.com/in/liewvictor/'>
                  <img src='https://res.cloudinary.com/yl/image/upload/v1633553148/linkedin_fir0qe.png' alt='LinkedIn'/>
                </a>
              </div>
            </div>
            <div className='team-profile col-12 col-md-6 col-lg-4 mt-4' id='Megan'>
              <h4>Megan Sowa</h4>
              <div className='about-profile-pic'>
                <img src="https://res.cloudinary.com/mesowa/image/upload/v1633519704/Green%20Plate/Screenshot_2021-10-06_at_12.27.59_xhghvl.png" alt="Megan" />
              </div>
              <div className='link-pic'>
                <a href='https://github.com/mesowa'>
                  <img src='https://res.cloudinary.com/yl/image/upload/v1633551817/github_duwsnq.png' alt='GitHub'/>
                </a>
                <a href='https://www.linkedin.com/in/megan-sowa-82a233215/'>
                  <img src='https://res.cloudinary.com/yl/image/upload/v1633553148/linkedin_fir0qe.png' alt='LinkedIn'/>
                </a>
              </div>
            </div>
            <div><h6>Logo designed by</h6><div className='link-pic-al'>
              <a href='https://www.alexsjsowa.com/'>
                <img src='https://res.cloudinary.com/mesowa/image/upload/v1633690069/Green%20Plate/Screenshot_2021-10-08_at_11.47.28_rhemou.png' alt='AlexSjSowa'/>
              </a></div>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}

export default About