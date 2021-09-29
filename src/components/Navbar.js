import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './wwlLOGO.png';

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
        <div className="top-navbar">
            <div className="top-navbar-container">
            <ul className="info">

                <li className="info-item">
                <i class="fas fa-envelope" />
                atty.boyet@westwoodlaw.ph
                <span className="span">|</span> 
                </li>

                <li className="info-item">
                <i class="fas fa-phone-alt" />
                (02) 835 9064
                <span className="span">|</span> 
                </li>

                <li className="info-item">
                <i class="fas fa-mobile-alt" />
                (63) 961 4958 696
                <span className="span">|</span> 
                (63) 905 1024 246
                </li>

            </ul>
            </div>
        </div>

        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img className="wwlLogo" src={logo} alt='WWL Logo' />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/aboutUs' className="nav-links" onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/ourTeam' className="nav-links" onClick={closeMobileMenu}>
                            Our Team
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/contactUs' className="nav-links" onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
