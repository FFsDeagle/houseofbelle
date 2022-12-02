import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressBook, faCircleInfo, faBriefcase, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Footer() {
  const iconHome =  <FontAwesomeIcon icon={faHome} />
  const iconContact = <FontAwesomeIcon icon={faAddressBook} />
  const iconInfo = <FontAwesomeIcon icon={faCircleInfo} />
  const iconCopyRight = <FontAwesomeIcon icon={faCopyright} />

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };


  return (
    <div className='footer-wrapper'>
      <div className="footer-info">
        <div className="footer-text">
          {iconCopyRight} House of Belle 
        </div>
        <div className="footer-text">
          ABN 00 000 000 000
        </div>
      </div>
    </div>
  )
}

export default Footer