import React from 'react'
import Typical from 'react-typical'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Drive from '@iconscout/react-unicons/icons/uil-google-drive'
import './Intro.css'
const Intro = () => {
    return (
        <>
            <div id="Intro" className='intro-container'>
                <div className='intro-parent'>
                    <div className="intro-details">
                        <div className="intro-wrapper-text">

                            <div className="col-wrapper">
                                <div className="col">
                                    <div className="col-icon">
                                        <a href="" className='col-icons'>
                                            {/* <i><Github/></i> */}
                                        </a>
                                        <a href="https://drive.google.com/drive/folders/1DOsM0NZIJ0Y0ddUhWPleeh1iyaRBdazM?usp=sharing" className='col-icons'>
                                            <i><Drive /></i>
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div className="intro-details-name">
                                <span className='primary-text'>
                                    {" "}
                                    Hello My Name <span className='highlight-text'>David Pangestu</span>
                                </span>
                            </div>

                            <div className="intro-details-role">
                                <span className='primary-text'>
                                    {" "}
                                    <h1>
                                        {" "}
                                        {/* <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Frontend Developer",
                                        1000,
                                        "React Js Dev",
                                        1000,
                                        "Angular Js Dev",
                                        1000,
                                        "Freelance Illustrator",
                                        1000
                                    ]}
                                /> */}
                                    </h1>
                                    <span className='intro-description'>
                                        I am a student from Bina Nusantara
                                        University majoring in computer science. I
                                        am a responsible person, conscientious, easy
                                        to get along with and happy to learn new
                                        things.
                                    </span>
                                </span>
                            </div>

                            <div className="intro-option">
                                <a href='MyCV' download='MyCV.pdf'>
                                    <button className='btn highlighted-btn'>Get CV</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="intro-picture">
                        <div className="intro-picture-background">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro