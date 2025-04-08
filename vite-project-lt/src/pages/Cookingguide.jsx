import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Dishes from "../components/Dishes";
import './Cookingguide.css'
import avatar1 from "../assets/4975733.png"
import img1 from "../assets/images (2).jpg"
import { INITIAL_CONTACTS2 } from "../data/data2";

const Cookingguide = () => {
    const [dishes2, setDishes2] = useState(INITIAL_CONTACTS2);
    const title2 = "Your Recently Viewed";
    const titlep2 = "";
    return (
        <div>
            <Navbar></Navbar>
            <div className='cooking-container'>
                <Title partPage="Home" currentPage="Cooking guide"></Title>
                <div className='cooking-content'>
                    <div className='cooking-content-left'>
                        <h3>How to make a Strawberry Shortcake</h3>
                        <p>It seems like there may be a misunderstanding. If you're asking how a user can make a Stawberry Shortcake, the process would be identical to the recipe I shared earlier. It involves preparing the strawberries, making the Shortcake, preparing whipped cream, and finally assembling the shortcake</p>
                        <div className='cooking-personal'>
                            <div className="cooking-personal-header">
                                <img src={avatar1} alt="" />
                                <h5>Emma Gonzalez</h5>
                                <button className="bookmark-btn">💾</button>
                            </div>
                            <div className='cooking-personal-content'>
                                <div className="row">
                                    <div className="col">
                                        <p>Time</p>
                                        <p>45 minutes</p>
                                    </div>
                                    <div className="col">
                                        <p>Notes</p>
                                        <p>352 community notes</p>
                                    </div>
                                    <div className="col">
                                        <p>Rating</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recipe">
                            <ul>
                                <li>Yield: 4 generous servings</li>
                                <li>2 print ripe, well-rinsed strawberries</li>
                                <li>1/2 cup sugar, or more to state</li>
                                <li>4 cups flour</li>
                                <li>3 tablespoons sugar</li>
                                <li>1/4 teaspoon sugar</li>
                                <li>5 teaspoon baking powder </li>
                                <li>1/4 cup butter</li>
                                <li>3 cups whipping cream</li>
                                <li>1/4 teaspoon vanilla extract</li>
                            </ul>
                            <button> + Add to Your Grocery List</button>
                        </div>
                    </div>
                    <div className='cooking-content-right'>
                        <img src={img1} alt="" />
                        <div className='step'>
                            <h5>Step 1</h5>
                            <p>Pick over and hull strawberries. Cut in half or slice, depending on size. Gently crush about a quarter of the berries with a fork to release their juices. Mix with remaining berries and the 1/2 cup of sugar, adding more sugar if necessary. Set aside, covered, for about half an hour to develop flavor.</p>
                        </div>
                        <img src={img1} alt="" />
                        <div className='step'>
                            <h5>Step 2</h5>
                            <p>Preheat oven to 450 degrees</p>
                        </div>
                        <div className='step'>
                            <h5>Step 3</h5>
                            <p>Into a large mixing bowl, sift together flour, 3 tablespoons sugar, salt and baking powder. Add ½ cup of softened butter, and rub into dry ingredients as for pastry. Add 1/4 cups cream, and mix to a soft dough. Knead the dough for one minute on a lightly floured pastry board, then roll it out to about 1/2-inch thickness. Using a 3-inch biscuit cutter, cut an even number of rounds - 2 rounds per serving.</p>
                        </div>
                        <img src={img1} alt="" />
                        <div className='step'>
                            <h5>Step 4</h5>
                            <p>Use a little of the butter to grease a baking sheet. Place half the rounds on it. Melt remaining butter and brush a little on the rounds; place remaining rounds on top. Bake for 10 to 15 minutes, or until golden brown.</p>
                        </div>
                        <div className='step'>
                            <h5>Step 5</h5>
                            <p>Use a little of the butter to grease a baking sheet. Place half the rounds on it. Melt remaining butter and brush a little on the rounds; place remaining rounds on top. Bake for 10 to 15 minutes, or until golden brown.</p>
                        </div>
                        <div className='step'>
                            <h5>Step 6</h5>
                            <p>Beat remaining cream until it thickens. Add vanilla. Beat again just until thick.</p>
                        </div>
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="opinion">
                    <h3>Cooking note</h3>
                    <textarea placeholder="State your opinion about the article"></textarea>
                    <div className="send-button">
                        <button>Send</button>
                    </div>
                </div>
                <div className="comment">
                    <div className="tabs">
                        <button className="active-tab">All Notes(32)</button>
                        <button>Most Helpful(20)</button>
                        <button>Private(1)</button>
                    </div>
                    <div className="user-comment">
                        <div className="comment-item">
                            <div className="comment-avatar">
                                <img src={avatar1} alt="" />
                            </div>
                            <div className="comment-content">
                                <div className="comment-title">
                                    <p>Jimmy Will</p>
                                    <div className="time">
                                        08:10 AM
                                    </div>
                                </div>
                                <p>Enim consectetur enim magna sit sit ullamco et dolore veniam nulla labore laboris anim eiusmod voluptate qui esse amet. Non cupidat sunt duis occ</p>
                                <div className="coment-react">
                                    <div className="icon">

                                    </div>
                                    <div className="reply">Reply</div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-item">
                            <div className="comment-avatar">
                                <img src={avatar1} alt="" />
                            </div>
                            <div className="comment-content">
                                <div className="comment-title">
                                    <p>Alisa Grill</p>
                                    <div className="time">
                                        08:10 AM
                                    </div>
                                </div>
                                <p>Culpa esse pariatur deserunt reprehenderit fugiat incididunt exercitation dolore id officia officia duis Lorem et elit do eu est tempor. Tempor consequat qui laborum do qui sit laboris tempor culpa sit deserunt reprehenderi...</p>
                                <div className="coment-react">
                                    <div className="coment-react-img">
                                        <img src={img1} alt="" />
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className="icon">

                                    </div>
                                    <div className="reply">Reply(12)</div>
                                    <div className="comment-item">
                                        <div className="comment-avatar">
                                            <img src={avatar1} alt="" />
                                        </div>
                                        <div className="comment-content">
                                            <div className="comment-title">
                                                <p>Chris Helson</p>
                                                <div className="time">
                                                    09:42 AM
                                                </div>
                                            </div>
                                            <p>Labore ea est enim esse officia anim consequat cillum deserunt pariatu...</p>
                                            <div className="coment-react">
                                                <div className="icon">

                                                </div>
                                                <div className="reply">Reply</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="comment-item">
                            <div className="comment-avatar">
                                <img src={avatar1} alt="" />
                            </div>
                            <div className="comment-content">
                                <div className="comment-title">
                                    <p>Emma Gonzalez</p>
                                    <div className="time">
                                        08:10 AM
                                    </div>
                                </div>
                                <p>Deserunt minim incididunt cillum nostrud do voluptate excepteur excepteur minim ex minim est laborum labore

                                    Mollit commodo in do dolor ut in mollit est</p>
                                <div className="coment-react">
                                    <div className="icon">

                                    </div>
                                    <div className="reply">Reply</div>
                                </div>
                            </div>
                        </div>
                        <div className="show">Show more discussion(47)</div>
                    </div>
                </div>
                <Dishes dishes={dishes2} title={title2} titlep={titlep2}></Dishes>

            </div>

            <Footer></Footer>
        </div>
    )
}

export default Cookingguide