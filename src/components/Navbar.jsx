import React, { useState } from 'react'
import '../css/Navbar.css'

function Navbar() {

  // Creamos el estado para el menu
  const [active, setActive] = useState('nav__menu');

  // Creamos el estado de las lineas menu:
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');

  // funcion para pulsar menu hamburguer:
  const navToggle = () => {
    active === 'nav__menu'
      ? setActive('nav__menu nav__active')
      : setActive('nav__menu')

    // Animacion de las lineas del menu hamburguesa:
    toggleIcon === 'nav__toggler'
      ? setToggleIcon('nav__toggler toggle')
      : setToggleIcon('nav__toggler')
  }

  return (
    <nav className="nav">
      <a href="/" className="nav__brand">alfred3ks</a>
      <ul className={active} >
        <li className="nav__item"><a href="#" className="nav__link">About</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Skills</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Portfolio</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
      </ul>

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar;