import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressBook, faCircleInfo, faBriefcase, faRightToBracket, faBars, faX, faL } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
// import { ReactComponent as HobIcon } from '../images/hobIcon.jpg'
import hobIconJpg from '../images/hobIcon.jpg'

function Navbar() {
  const iconHome =  <FontAwesomeIcon icon={faHome} />
  const iconContact = <FontAwesomeIcon icon={faAddressBook} />
  const iconInfo = <FontAwesomeIcon icon={faCircleInfo} />
  const iconProject = <FontAwesomeIcon icon={faBriefcase} />
  const iconLogin = <FontAwesomeIcon icon={faRightToBracket} />
  const iconHamburger = <FontAwesomeIcon size='2x' icon={faBars} />
  const iconExitMenu = <FontAwesomeIcon size='2x' icon={faX} />

  const [hover, setHover] = useState(false);

  let isMobile = true;

  const [selection, setSelection] = useState(true);

  const [width, setWidth] = useState(window.innerWidth); // check width size of the window
  const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 730){
        if(!selection){
          setSelection(true);
          document.body.style.overflow = "hidden"
        }
        return
      }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    };
  });

  useEffect(() => {
    if (!selection){
      document.body.style.overflow = "hidden"
    }
    if (selection){
      document.body.style.overflow = "auto"
    }
  })

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className='nav-wrapper'>
      <div className="nav-container-item-01">
        <div className="item-02">
          <Link className='link' to='/'>
              {iconHome}
              {/* <img className="hob-icon" src={hobIconJpg} alt="" /> */}
          </Link>
          </div>
        <div className="nav">
          <div className="item-03" onMouseEnter={onHover} onMouseLeave={onLeave}>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button id='dropdown-item-01' className="dropdown-item" type="button">
                  <Link className='link-dropdown' to='/packages'>
                    Packages
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="item-01">
            <Link className='link' to='/booking'>
              <div className="sub-item-02">
                Book Now
              </div>
            </Link>
          </div>
          <div className="item-01">
            <Link className='link' to='/faqs'>
              FAQs
            </Link>
          </div>
        </div>
        <div className="item-02">
        </div>
      </div>
      <div className="nav-container-item-02">
       <div className="nav-container-contents">
          <div className="nav-bar-button">
            <div onClick={() => setSelection(!selection)} className="menu-icon">
              {selection ? iconHamburger : iconExitMenu}
            </div>
            <div className="menu-title">
              {selection ? <Link className='link-icon' to="/">House of Belle</Link> : null}
            </div>
          </div>
            {!selection ? <div className='mobile-menu'>
              <ul className='mobile-menu-list'>
                  <li className='mobile-menu-list-item'>
                    <Link onClick={() => setSelection(!selection)}  className='link-menu-item' to='/'>
                      Home
                    </Link>
                  </li>
                  <li className='mobile-menu-list-item'>
                    <Link onClick={() => setSelection(!selection)}  className='link-menu-item' to='/packages'>
                      Packages
                    </Link>
                  </li>
                  <li className='mobile-menu-list-item'>
                    <Link onClick={() => setSelection(!selection)}  className='link-menu-item' to='/booking'>
                      Book Now
                    </Link>
                  </li>
                  <li className='mobile-menu-list-item'>
                    <Link onClick={() => setSelection(!selection)}  className='link-menu-item' to='/faqs'>
                      FAQs
                    </Link>
                  </li>
              </ul>
            </div> : null}
       </div>
      </div>
    </div>
  )
}

export default Navbar