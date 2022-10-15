import React from 'react'
import './Scrollup.css'
import ArrowUp from '@iconscout/react-unicons/icons/uil-arrow-up'
import { Link } from 'react-scroll'

const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".scrollup")

    this.scrollY >= 560 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll")
  })
  return (
    <Link spy={true} to='Nav' smooth={true} activeClass="activeClass">
      <div className='scrollup'>
        <i><ArrowUp color={"white"}/></i>
      </div>
    </Link>

  )
}

export default Scrollup