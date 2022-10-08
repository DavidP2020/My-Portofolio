import React from 'react'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
import './Header.css'
const Header = () => {
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='' className="nav-logo">David Pangestu</a>
                
                <div className="nav-menu">
                    <ul className='nav-list grid'>
                        <Link className='nav-list' spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                            <li className='"nav-item'>
                                <div className='nav-link'>
                                    <i className='nav-icon fa fa-home'></i> Home
                                </div>
                            </li>
                        </Link>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                            <li className='"nav-item'>
                                <div className='nav-link'>
                                    <i className='nav-icon fa fa-graduation-cap'></i> Education
                                </div>
                            </li>
                        </Link>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                            <li className='"nav-item'>
                                <div className='nav-link'>
                                    <i className='nav-icon fa fa-briefcase'></i> Experience
                                </div>
                            </li>
                        </Link>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                            <li className='"nav-item'>
                                <div className='nav-link'>
                                    <i className='nav-icon fa fa-file-archive-o'></i> Portofolio
                                </div>
                            </li>
                        </Link>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                            <li className='"nav-item'>
                                <div className='nav-link'>
                                    <i className='nav-icon fa fa-address-book-o'></i> Contact
                                </div>
                            </li>
                        </Link>
                    </ul>
                    <i className='nav-close fa fa-times'></i>
                </div>
                <div className="nav-toggle">
                    <i className='fa fa-bars'></i>
                </div>

            </nav>
        </header>
    )
}

export default Header