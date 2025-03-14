import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./About.css"
import LoginImg from '../assets/LoginImg.jpg';
const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div class="container-about">
                <div class="text-section">
                    <h1>About Us</h1>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button>Learn More</button>
                    <p class="attribution">Image from Freepik</p>
                </div>
                <div class="image-section">
                    <div className='box1'></div>
                    <img src={LoginImg} alt="" />
                    <div className='box2'></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default About