import React, { useState } from 'react'
import './Education.css'

const Education = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  }

  return (
    <section className='skill section' id="Education">
      <h2 className='section-title'>Education & Experience</h2>
      <span className='section-subtitle'>My Educati on and Experience</span>

      <div className="education-container container">
        <div className="education-tabs">
          <div
            className={
              toggle === 1 ?
                "education-button education-active button--flex " :
                "education-button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className='education-icons fa fa-graduation-cap'></i>
            Education
          </div>

          <div
            className={
              toggle === 2 ?
                "education-button education-active button--flex " :
                "education-button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className='education-icons fa fa-briefcase'></i>
            Experience
          </div>
        </div>

        <div className="education-sections">
          <div
            className={
              toggle === 1 ?
                "education-content education-content-active" :
                "education-content"
            }>
            <div className="education-data">
              <div>
                <h3 className="education-title">Binus University</h3>
                <span className="education-subtitle">Computer Science</span>

                <div className="education-calender">
                  <i className='education-icon fa fa-calendar-check-o'>{" "}2018 - 2022</i>
                </div>
              </div>

              <div>
                <span className="education-rounded"></span>
                <span className="education-line"></span>
              </div>
            </div>

            <div className="education-data">
              <div></div>

              <div>
                <span className="education-rounded"></span>
                <span className="education-line"></span>
              </div>

              <div>
                <h3 className="education-title">SMKN 1 Tanjung Pinang</h3>
                <span className="education-subtitle">Computer and Network Engineering</span>

                <div className="education-calender">
                  <i className='education-icon fa fa-calendar-check-o'>{" "}2015 - 2018</i>
                </div>
              </div>
            </div>

            <div className="education-data">
              <div></div>
              <div>
                <span className="education-rounded"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2 ?
                "education-content education-content-active" :
                "education-content"
            }>
            <div className="education-data">
              <div>
                <h3 className="education-title">PT. Mitra Pajakku</h3>
                <span className="education-subtitle">Internship Frontend Developer</span>

                <div className="education-calender">
                  <i className='education-icon fa fa-calendar-check-o'>{" "} 2021 - 2022</i>
                </div>
              </div>

              <div>
                <span className="education-rounded"></span>
                <span className="education-line"></span>
              </div>
            </div>

            <div className="education-data">
              <div></div>

              <div>
                <span className="education-rounded"></span>
                <span className="education-line"></span>
              </div>

              <div>
                <h3 className="education-title">Telkom Indoneisa</h3>
                <span className="education-subtitle">Internship Field Technical</span>

                <div className="education-calender">
                  <i className='education-icon fa fa-calendar-check-o'>{" "} August 2017 - October 2017</i>
                </div>
              </div>
            </div>

            <div className="education-data">
              <div></div>
              <div>
                <span className="education-rounded"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Education