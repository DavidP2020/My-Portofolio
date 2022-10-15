import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Youtube from '@iconscout/react-unicons/icons/uil-youtube'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container container">
                <h1 className='section-title'>David</h1>
                <ul className='footer-list'>
                    <Link spy={true} to='Education' smooth={true} activeClass="activeClass">
                        <li>
                            <div className='footer-link'>
                                Education
                            </div>
                        </li>
                    </Link>
                    <Link spy={true} to='Skills' smooth={true} activeClass="activeClass">
                        <li>
                            <div className='footer-link'>
                                Skill
                            </div>
                        </li>
                    </Link>
                    <Link spy={true} to='Portofolio' smooth={true} activeClass="activeClass">
                        <li>
                            <div className='footer-link'>
                                Portofolio
                            </div>
                        </li>
                    </Link>
                    <Link spy={true} to='Certificate' smooth={true} activeClass="activeClass">
                        <li className='nav-item'>
                            <div className='footer-link'>
                                Certificate
                            </div>
                        </li>
                    </Link>
                    <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
                        <li>
                            <div className='footer-link'>
                                Contact
                            </div>
                        </li>
                    </Link>
                </ul>

                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/davidpangestu-1610dp" className="footer-social-list">
                        <i><LinkedIn/></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCXu0_6TJApSaso2Wpeor8LQ" className="footer-social-list">
                        <i><Youtube/></i>
                    </a>
                    {/* <a href=" " className="footer-social-list">
                        <i><Github/></i>
                    </a> */}
                </div>

                <div className="footer-copyright">
                    <span className="footer-copy">&#169; David Pangestu. All Right Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer