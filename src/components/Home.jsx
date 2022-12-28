import React, { useState, useEffect, useRef } from 'react'
import '../App.css'
import heroImg01 from '../images/IMG_1344.jpg'
import heroImg02 from '../images/IMG_1351.jpg'
import heroImg03 from '../images/IMG_1742.jpg'
import heroImg04 from '../images/IMG_1851.jpg'
import heroImg05 from '../images/IMG_2033.jpg'
import heroImg06 from '../images/IMG_2345.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import  AOS  from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'


function Home() {
  document.title = 'House of Belle - Home';
  const iconFacebook = <FontAwesomeIcon size='2x' icon={faFacebook} /> 
  const iconInstagram = <FontAwesomeIcon size='2x' icon={faInstagram} />
  const iconTwitter = <FontAwesomeIcon size='2x' icon={faTwitter} /> 

  const [selection, setSelection] = useState(false);

  const [width, setWidth] = useState(window.innerWidth); // check width size of the window
  const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 730){
        if(!selection){
          setSelection(!selection);
          console.log(selection)
        }
      }if (window.innerWidth < 730 && selection === true){
        setSelection(!selection);
      }
  };

  useEffect(() => {
    if (window.innerWidth > 730){
      const timer = setTimeout(() => {
        setSelection(!selection)
      })
    }
  },[]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    };
  })

  useEffect(() => {
    AOS.init(({duration: 500}))
  },[])

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])

  const moveToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  const openNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }


  return (
    <div className='home-wrapper'>
      <div id="container" className="home">
        <div className="hero">
            {selection ? <div className="icontitle">House of Belle</div> : null}
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
            <Link className='link-packages' to='/booking'>
              <div className="hero-btn">
                  Let's Decorate!
              </div>
            </Link>
            <Link className='link-packages' to='/packages'>
              <div className="hero-btn">
                  Packages & Pricing
              </div>
            </Link>
          </div>
          <div className="hero-background">
            <div className="hero-background-container-01">
              <img src={heroImg01} alt="" className="hero-background-img-01" />
              <img src={heroImg02} alt="" className="hero-background-img-02" />
            </div>
            <div className="hero-background-container-02">
              <img src={heroImg03} alt="" className="hero-background-img-03" />
              <img src={heroImg04} alt="" className="hero-background-img-04" />
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
                  <Link className='link' onClick={() => openNewTab('https://www.facebook.com/profile.php?id=100087354747246')}>
                    {iconFacebook}
                  </Link>
                </div>
                <div className="card-icon">
                  <Link className='link' onClick={() => openNewTab('https://www.instagram.com/houseofbelle_au/')}>
                    {iconInstagram}
                  </Link>
                </div>
                {/* <div className="card-icon">
                  <Link className='link' to='/'>
                    {iconTwitter}
                  </Link>
                </div> */}
              </div>
              <div className="card-02-btn" onClick={() => moveToTop()}>
                  Back to top
              </div>
          </div>
        </div>
        {/* <div className="card-03">
          <div className="card-03-container">
              <img className='card-03-img' src={heroImg05} alt="" />
              <div className="card-03-info">
                <div className="card-03-info-item-01">
                  From intimate date nights to large gatherings, leave the party planning to us! We can accommodate celebrations between 2-24 guests*!
                </div>
                <div className="card-03-info-item-02">
                  <div id="accordion">
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                          <button id="btn-collapse-link" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <div className='package-title'>2 – 4 guests</div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                          <li>Ideal for small groups</li>
                          <li>Three (3) hours of use</li>
                          <li>$250 inc. GST</li>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                          <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div className='package-title'>6 – 12 guests</div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                          <li>Ideal for midsize groups</li>
                          <li>Three (3) hours of use</li>
                          <li>$320 inc. GST </li>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                          <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div className='package-title'>13 – 18 guests</div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                          <li>Ideal for large groups</li>
                          <li>Three (3) hours of use</li>
                          <li>$390 inc. GST</li>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingFour">
                        <h5 class="mb-0">
                          <button id="btn-collapse-link" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <div className='package-title'>19 – 24 guests</div>
                          </button>
                        </h5>
                      </div>
                      <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div class="card-body">
                          <li>Ideal for large groups</li>
                          <li>Three (3) hours of use</li>
                          <li>$460 inc. GST</li>
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
        </div> */}
      </div>
    </div>
  )
}

export default Home