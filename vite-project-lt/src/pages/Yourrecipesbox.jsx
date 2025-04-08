import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Title from '../components/Title'
import './Yourrecipesbox.css'
import avatar1 from "../assets/4975733.png"
import img3 from "../assets/images (3).jpg"
import img1 from "../assets/istockphoto-1296273988-612x612.jpg"
import img2 from "../assets/SPAGHETTI-POMODORO-CON-CAMARONES-WEB-MONTICELLO-1200x675.jpg"
import img4 from "../assets/images (4).jpg"
import img5 from "../assets/fisk82.jpg"
import img6 from "../assets/istockphoto-1296273988-612x612.jpg"
import img7 from "../assets/download (1).jpg"
import img8 from "../assets/download.jpg"
const recipes = [
    {
        id: 1,
        title: 'Italian-style tomato salad',
        time: '14 minutes',
        image: img1,
    },
    {
        id: 2,
        title: 'Vegetable and shrimp spaghetti',
        time: '15 minutes',
        image: img1,
    },
    {
        id: 3,
        title: 'Lotus delight salad',
        time: '20 minutes',
        image: img1,
    },
    {
        id: 4,
        title: 'Snack cakes',
        time: '21 minutes',
        image: img1,
    },
    {
        id: 5,
        title: 'Salad with cabbage and shrimp',
        time: '32 minutes',
        image: img1,
    },
    {
        id: 6,
        title: 'Bean, shrimp, and potato salad',
        time: '32 minutes',
        image: img1,
    },
    {
        id: 7,
        title: 'Sunny-side up fried eggs',
        time: '32 minutes',
        image: img1,
    },
    {
        id: 8,
        title: 'Lotus delight salad',
        time: '32 minutes',
        image: img1,
    },
];
const Yourrecipesbox = () => {
    return (
        <div>
            <Navbar />
            <div className="recipesbox-container">
                <Title partPage="Home" currentPage="Your Recipe Box" />
                <div className="box">
                    <h1>Emma Gonzalez's Recipe Box</h1>
                    <div className="info">
                        <div className="info-left">
                            <img
                                src={avatar1}
                                alt="Emma Gonzalez"
                                className="profile-picture"
                            />
                        </div>
                        <div className="info-right">
                            <p>
                                Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times.
                                She is also an accomplished author, contributing to numerous cookbooks and food publications.
                                Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
                            </p>
                            <div className="subcribes">
                                <p>6.5k Subscribes</p>
                                <button className="share-btn">Share</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recipe-list-container">
                    <div className="tabs">
                        <button className="active-tab">Saved Recipes</button>
                        <button>Folders</button>
                        <button>Recipes by Genevieve</button>
                    </div>
                    <div className="recipe-grid">
                        {recipes.map((recipe) => (
                            <div key={recipe.id} className="recipe-card">
                                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                                <h3 className="recipe-title">{recipe.title}</h3>
                                <p className="recipe-time">{recipe.time}</p>
                                <button className="bookmark-btn">💾</button>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button className="prev">&lt;</button>
                        <button className="page-number active">1</button>
                        <button className="page-number">2</button>
                        <button className="page-number">3</button>
                        <button className="page-number">4</button>
                        <span>...</span>
                        <button className="page-number">10</button>
                        <button className="page-number">11</button>
                        <button className="next">&gt;</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Yourrecipesbox