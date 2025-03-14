import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Subscribe from '../components/Subscribe'
import IMG from '../assets/GatfrwoaIAACzY2.jpg'
import './Recipes.css'
const Recipes = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='recipes-container bg-light'>
                <Title partPage="Recipes" currentPage="Subscribe"></Title>
                <Subscribe></Subscribe>
                <div className='subscribe-includes'>
                    <div className='subscribe-includes-title'>
                        An All Access subscription includes
                    </div>
                    <div className="items">
                        <ul className="items-list">
                            <li className="item-card">
                                <h6>Cooking</h6>
                                <p>Enjoy recipes, advice and inspiration for any occasion</p>
                            </li>
                            <li className="item-card">
                                <h6>Wirecutter</h6>
                                <p>Explore independent reviews for thousands of products</p>
                            </li>
                            <li className="item-card">
                                <h6>Games</h6>
                                <p>Unwind with Spelling Bee, Wordle, The Crossword</p>
                            </li>
                            <li className="item-card">
                                <h6>The Athletic</h6>
                                <p>Discover in-depth, personalized sports journalism</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="subcribe-to-cook">
                    <img src={IMG} alt="Chefify Logo" />
                    <div className="subscribe-includes-title">
                        Subscribe to Chefify Cooking only
                    </div>
                    <p>
                        Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily
                    </p>
                    <div className="plan-options">
                        <div className="plan-option">
                            <input type="radio" name="plan" id="monthly-plan" />
                            <label htmlFor="monthly-plan">$2/month (Billed every 4 weeks)</label>
                        </div>
                        <div className="plan-option">
                            <input type="radio" name="plan" id="yearly-plan" />
                            <label htmlFor="yearly-plan">$20/year (Billed one annually)</label>
                        </div>
                    </div>
                    <button className="subscribe-btn">Subscribe Now</button>
                    <div className="cancel-policy">Cancel anytime</div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Recipes