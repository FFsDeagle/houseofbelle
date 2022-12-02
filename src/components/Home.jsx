import React, { useState, useEffect, useRef } from 'react'
import '../App.css'
import heroImg01 from '../images/hero-img-01.jpg'
import heroImg02 from '../images/hero-img-02.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import  AOS  from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'


function Home() {

  const iconFacebook = <FontAwesomeIcon size='2x' icon={faFacebook} /> 
  const iconInstagram = <FontAwesomeIcon size='2x' icon={faInstagram} />
  const iconTwitter = <FontAwesomeIcon size='2x' icon={faTwitter} /> 

  useEffect(() => {
    AOS.init(({duration: 500}))
  },[])

  return (
    <div className='home-wrapper'>
      <div id="container" className="home">
        <div className="hero">
          <div className="hero-title">
            <div className="title-01">
              Bring your
            </div>
            <div className="title-02">
              Dream 
            </div>
            <div className="title-03">
              to Life
            </div>
          </div>
          <div className="hero-btn-container">
            <div className="hero-btn">
              <Link className='link-packages' to='/booking'>
                Let's Decorate!
              </Link>
            </div>
            <div className="hero-btn">
              <Link className='link-packages' to='/packages'>
                Packages & Pricing
              </Link>
            </div>
          </div>
          <div className="hero-background">
            <div className="hero-background-container-01">
              <img src={heroImg01} alt="" className="hero-background-img-01" />
              <img src={heroImg02} alt="" className="hero-background-img-02" />
            </div>
            <div className="hero-background-container-02">
              <img src={heroImg01} alt="" className="hero-background-img-03" />
              <img src={heroImg02} alt="" className="hero-background-img-04" />
            </div>
          </div>
        </div>
        <div className="card-02">
          <div className="card-02-sub">

          </div>
          <div className="card-info-01-text">
            <div className="card-item-01" data-aos="fade-up">
                How does it work?
            </div>
          </div>
          <div className="card-info-01">
            <div className="card-info-sub-01" data-aos="fade-up">
              <div className="card-info-sub-title">
                Submit an inquiry
              </div>
              <div className="card-info-sub-desc">
                Send an inquiry by filling out our contact form
              </div>
            </div>
            <div className="card-info-sub-01" data-aos="fade-up">
              <div className="card-info-sub-title">
                Confirm booking
              </div>
              <div className="card-info-sub-desc">
                Determine your preferences (color-scheme, theme, add-ons, etc.). Submit payment to confirm your booking. 
              </div>
            </div>    
            <div className="card-info-sub-01" data-aos="fade-up">
              <div className="card-info-sub-title">
                Arrive and enjoy
              </div>
              <div className="card-info-sub-desc">
                Our team will deliver and set-up your one-of-a-kind picnic. 
              </div>
            </div>
          </div>
          <div className="card-info-02-text" data-aos="fade-up">
            <div className="card-item-01">
                Follow us
            </div>
            <div className="card-info-sub-desc">
                <div className="card-icon">
                  <Link className='link' to='/'>
                    {iconFacebook}
                  </Link>
                </div>
                <div className="card-icon">
                  <Link className='link' to='/'>
                    {iconInstagram}
                  </Link>
                </div>
                <div className="card-icon">
                  <Link className='link' to='/'>
                    {iconTwitter}
                  </Link>
                </div>
              </div>
          </div>
        </div>
        <div className="card-03">
          <div className="card-03-container">
              <img className='card-03-img' src={heroImg02} alt="" />
              <div className="card-03-info">
                <div className="card-03-info-item-01">
                  From intimate date nights to large gatherings, leave the party planning to us! We can accommodate celebrations between 2-30 guests*!
                </div>
                <div className="card-03-info-item-02">
                  <div id="accordion">
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                          <button id="btn-collapse-link" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <div className='package-title'>Pearl Package (2-8 guests)</div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                          <li>Ideal for small groups</li>
                          <li>Two (2) hours of use</li>
                          <li>Table for 2 guests: $250</li>
                          <li>Additional Guests up to 8: $40 per guest</li>
                          <li>10% Service Fee will be added</li>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                          <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div className='package-title'>Ruby Package (9-16 guests)</div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                          <li>Ideal for midsize groups</li>
                          <li>Three (3) hours of use</li>
                          <li>Table for 9-10 guests: $545</li>
                          <li>Table for 11-12 guests: $645</li>
                          <li>Table for 13-16 guests: $55/person</li>
                          <li>12-15% Service Fee will be added</li>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                          <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div className='package-title'>Diamond Package (17-30 guests)</div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                          <li>Ideal for large groups</li>
                          <li>Four (4) hours of use</li>
                          <li>Table for 17-30 guests - $65/person</li>
                          <li>For picnics larger than 30 guests, please submit a formal inquiry for a custom quote.</li>
                          <li>*Requires 21 days’ minimum notice</li>
                          <li>20% Service Fee will be added</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-03-info-item-03">
                  <Link className='link-packages' to='/packages'>
                    Whats included?
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home