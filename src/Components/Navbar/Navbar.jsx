import React, { useState } from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
const Navbar = () => {
    const [active, setActive] = useState("nav-menu");
    const [icon, setIcon] = useState("nav-toggler");
    const navToggle = () => {
        active === "nav-menu" ? setActive("nav-menu nav-active") : setActive("nav-menu");
        icon === "nav-toggler" ? setIcon("nav-toggler toggle") : setIcon("nav-toggler");
    };
    return (
        <nav className='nav-wrapper' id='Nav'>
            <div className="nav-left">
                <div className="nav-name">David Pangestu</div>
            </div>
            
            <div className="nav-right">
                <div className="nav-list">
                    <ul className={active}>
                        <Link spy={true} to='Intro' smooth={true} activeClass="activeClass">
                            <li className='nav-item'>
                                <div className='nav-link'>
                                    <i className='nav-icon fa fa-home'></i> Home
                                </div>
                            </li>
                        </Link>
                        <Link spy={true} to='Education' smooth={true} activeClass="activeClass">
                            <li className='nav-item'>
                                <div className='nav-link'>
                                    <i className='nav-icon fa fa-graduation-cap'></i> Education
                                </div>
                            </li>
                        </Link>
                        <Link spy={true} to='Skills' smooth={true} activeClass="activeClass">
                            <li className='nav-item'>
                                <div className='nav-link'>
                                    <i className='nav-icon fa fa-briefcase'></i> Skill
                                </div>
                            </li>
                        </Link>
                        <Link spy={true} to='Portofolio' smooth={true} activeClass="activeClass">
                            <li className='nav-item'>
                                <div className='nav-link'>
                                    <i className='nav-icon fa fa-file-archive-o'></i> Portofolio
                                </div>
                            </li>
                        </Link>
                        <Link spy={true} to='Certificate' smooth={true} activeClass="activeClass">
                            <li className='nav-item'>
                                <div className='nav-link'>
                                    <i className='nav-icon fa fa-certificate'></i> Certificate
                                </div>
                            </li>
                        </Link>
                        <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
                            <li className='nav-item'>
                                <div className='nav-link'>
                                    <i className='nav-icon fa fa-address-book-o'></i> Contact
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>

                <div>
                    <Toggle />
                </div>
                
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>

        </nav >

    );
}

export default Navbar