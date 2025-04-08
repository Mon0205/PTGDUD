import React from 'react'
import './Pagination.css'
import img1 from "../assets/istockphoto-1296273988-612x612.jpg"
const Pagination = () => {
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
        {
            id: 9,
            title: 'Lotus delight salad',
            time: '32 minutes',
            image: img1,
        },
    ];
    return (
        <div className='pagination-content'>
            <div className="pagination-title">
                <h3>Salad(32)</h3>
                <div className="component">
                    <button type="button" class="btn btn-close-white dropdown-toggle" data-bs-toggle="dropdown">
                        A-Z
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Normal</a></li>
                        <li><a class="dropdown-item active" href="#">Active</a></li>
                        <li><a class="dropdown-item disabled" href="#">Disabled</a></li>
                    </ul>
                </div>
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
    )
}

export default Pagination