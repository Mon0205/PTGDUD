import React from "react";
import "./Filters.css";

const Filters = () => {
    return (
        <div className="filters-container">
            <div className="title">Filters</div>

            {/* Type Section */}
            <div className="section">
                <div className="section-title">
                    <p>Type</p>
                    <button className="toggle-button">▼</button>
                </div>
                <div className="section-content">
                    <div className="row">
                        <div className="col">
                            <label>
                                <input type="checkbox" /> Pan-fried
                            </label>
                            <label>
                                <input type="checkbox" /> Grilled
                            </label>
                            <label>
                                <input type="checkbox" /> Sauteed
                            </label>
                            <label>
                                <input type="checkbox" /> Steamed
                            </label>
                        </div>
                        <div className="col">
                            <label>
                                <input type="checkbox" /> Stir-fried
                            </label>
                            <label>
                                <input type="checkbox" /> Roasted
                            </label>
                            <label>
                                <input type="checkbox" /> Baked
                            </label>
                            <label>
                                <input type="checkbox" /> Stewed
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Time Section */}
            <div className="section">
                <div className="section-title">
                    <p>Time</p>
                    <button className="toggle-button">▼</button>
                </div>
                <div className="section-content">
                    <div className="slider-container">
                        <input type="range" min="10" max="60" className="slider" />
                        <div className="time-labels">
                            <span>10 minutes</span>
                            <span>60 minutes</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rating Section */}
            <div className="section">
                <div className="section-title">
                    <p>Rating</p>
                    <button className="toggle-button">▼</button>
                </div>
                <div className="section-content">
                    <div className="stars-container flex-column ">
                        <label>
                            <input type="checkbox" />
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className="star">★</span>
                            ))}
                        </label>
                        <label>
                            <input type="checkbox" />
                            {[...Array(4)].map((_, index) => (
                                <span key={index} className="star">★</span>
                            ))}
                        </label>
                        <label>
                            <input type="checkbox" />
                            {[...Array(3)].map((_, index) => (
                                <span key={index} className="star">★</span>
                            ))}
                        </label>
                        <label>
                            <input type="checkbox" />
                            {[...Array(2)].map((_, index) => (
                                <span key={index} className="star">★</span>
                            ))}
                        </label>
                        <label>
                            <input type="checkbox" />
                            {[...Array(1)].map((_, index) => (
                                <span key={index} className="star">★</span>
                            ))}
                        </label>
                    </div>
                </div>
            </div>

            <button className="apply-button">Apply</button>
        </div>
    );
};

export default Filters;
