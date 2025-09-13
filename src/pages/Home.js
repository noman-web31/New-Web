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


    <section className="about" id="about">
      <div className="container">
        <h2 class="headWrap">About <span class="spanColor"> Us</span></h2>
        <p>"Hi, I’m Noman, a passionate Frontend Developer with expertise in HTML, CSS, JavaScript, Bootstrap, and React. I enjoy transforming ideas into responsive and user-friendly websites. My focus is on clean design, smooth user experience, and writing code that is both efficient and scalable.</p>

        <p>I have hands-on experience in building modern web applications, and I’m always eager to learn new technologies to enhance my skills. My goal is to create digital solutions that not only look good but also perform seamlessly across all devices.</p>

        <h3>My Journey</h3>
        <p>I began my journey in web development in 2023, driven by a passion for learning. Over time, I have built various practice projects, from small websites to more complex applications, each helping me refine my skills. My focus is always on writing clean code and creating smooth user experiences.</p>
        
        <h3>Skills & Technologies</h3>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>JavaScript & ES6</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>React JS</li>
          <li>Wordpress</li>
          <li>Custom Design</li>
        </ul>

        <h3>My Approach</h3>
        <p>I believe in clean, efficient code and prioritize usability and performance. My approach involves understanding client needs, designing intuitive user interfaces, and continuously iterating to improve the end product.</p>

      </div>
    </section>
    
    <section className="service" id="service">
      <div className="container">
        <h2 class="headWrap">Servi<span class="spanColor">ces</span></h2>
      </div>
    </section>
    </div>
  )
}

export default Home