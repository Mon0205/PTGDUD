import React from 'react'
import './Subscribe.css'
import IMG from '../assets/GatfrwoaIAACzY2.jpg'
const Subscribe = () => {
    return (
        <div className='subscribe-container'>
            <div className="subscribe-container-left">
                <h5>This recipe is exclusively available to subscribers</h5>
                <h4>Join now to access effortless, hassle-free recipes</h4>
                <ul>
                    <li>20,000+ recipes to sult all tastes and skill levels</li>
                    <li>Filter for dietsc cook times, and more</li>
                    <li>Personal Recipe Box for favorites</li>
                    <li>Gain exclusive access to our subscribe-only mobile app.</li>
                </ul>
                <h4>0.25USD / Week</h4>
                <span>Billed as $1 every 4 weeks for the first year</span>
                <button>Subcribe</button>
                <p>Cancel or Pause anytime</p>
            </div>
            <div className="subscribe-container-right">
                <img src={IMG} alt="" />
            </div>
        </div >
    )
}

export default Subscribe