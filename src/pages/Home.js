import React from 'react'
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div>

      <section className='hero-section'>
        <div className="container">
          <h3>Hello It's me</h3>
          <h1>Noman</h1>
          <h3>And I'm a <span> Frontend Developer </span></h3>
          <p>Welcome to my portfolio! specialize in frontend development, focusing on creating intuitive and visually appealing user interfaces.</p>
          <div className="social-icon">
            <Link to="#"><FaLinkedinIn /></Link>
            <Link to="#"><RiFacebookFill /></Link>
            <Link to="#"><FaTwitter /></Link>
            <Link to="#"><FaInstagram /></Link>
          </div>
          <Link to="#" className='HeroBtn'>Download CV</Link>
        </div>
      </section>
    </div>
  )
}

export default Home