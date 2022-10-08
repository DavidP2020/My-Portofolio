import React from 'react'
import Typical from 'react-typical'
import './Intro.css'
const Intro = () => {
    return (
        <>
            <div className='intro-container'>
                <div className='intro-parent'>
                    <div className="intro-details">
                        <div className="intro-wrapper-text">
                            <div className="col">
                                <div className="col-icon">
                                    <a href="">
                                        <i className='fa fa-linkedin'></i>
                                    </a>
                                    {/* <a href="">
                                    <i className='fa fa-linkedin'></i>
                                </a> */}
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
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi et dignissimos adipisci aliquam rerum deserunt ut aliquid possimus ea! Minus quae sapiente eveniet! Est assumenda laudantium soluta temporibus reprehenderit voluptas?
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