import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressBook, faCircleInfo, faBriefcase, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Navbar() {
  const iconHome =  <FontAwesomeIcon icon={faHome} />
  const iconContact = <FontAwesomeIcon icon={faAddressBook} />
  const iconInfo = <FontAwesomeIcon icon={faCircleInfo} />
  const iconProject = <FontAwesomeIcon icon={faBriefcase} />
  const iconLogin = <FontAwesomeIcon icon={faRightToBracket} />

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className='nav-wrapper'>
      <div className="item-02">
        <Link className='link' to='/'>
            {iconHome}
        </Link>
        </div>
      <div className="nav">
        <div className="item-03" onMouseEnter={onHover} onMouseLeave={onLeave}>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button id='dropdown-item-01' class="dropdown-item" type="button">
                <Link className='link-dropdown' to='/packages'>
                  Packages
                </Link>
              </button>
              {/* <button id='dropdown-item-01' class="dropdown-item" type="button">
                <Link className='link-dropdown' to='/addons'>
                  Add ons
                </Link>
              </button> */}
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
        <Link className='link' to='/'>
          {/* {iconLogin} */}
        </Link>
      </div>
    </div>
  )
}

export default Navbar