import React from 'react'
import Carousel from '../Carousel/Carousel'
import './Home.css'
import officeImg from '../../img/shutterstock_696636415.jpg'

function Home () {
    return (
        <div className='home-div'>
            <Carousel/>

            <div id="info1-container">
                <div id="info1">
                    <div id="info1-text">
                        <p className="info-title">
                            Fusce urna erat, aliquet et justo nec
                        </p>
                        <p className="info-subtext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget augue sit amet sem tincidunt viverra ac non quam. Nunc quis dapibus mi. Suspendisse eu risus vulputate sapien elementum tempor nec eget ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut lorem orci, auctor id erat.
                        </p>
                        <ul>
                            <li>
                                <span>Fusce sed lacus quis mauris feugiat ornare.</span>
                            </li>
                            <li>
                                <span>Quisque feugiat vulputate enim, ac posuere velit sodales venenatis.</span>
                            </li>
                            <li>
                                <span>Quisque ut odio quis augue semper.</span>
                            </li>
                            <li>
                                <span>Maecenas fermentum fringilla ante a luctus.</span>
                            </li>
                        </ul>
                        <button className="dark-blue-button">Learn more</button>
                    </div>

                    <img id="office-img" src={officeImg}/>
                </div>
            </div>

            <div id="info2-container">
                <div id="info2">
                    <div id="info2-text-container">
                        <div id="info2-text" >
                            <p id="info2-title" className="info-title">
                                Proin leo purus, volutpat id metus sit amet, dapibus iaculis turpis.
                            </p>
                            <p id="info2-subtext" className="info-subtext">
                            Sed pharetra egestas purus, id ornare dolor suscipit ut. Morbi consequat fringilla eros vitae pharetra. Quisque pellentesque varius urna. Nunc quis nulla ultricies, facilisis orci non, iaculis ligula. Mauris quis felis consectetur, commodo ipsum eget, euismod odio. Sed finibus sagittis elit, sit amet tincidunt massa commodo non. Nullam dui nunc, dignissim sit amet lectus pulvinar, elementum interdum tellus.
                            </p>
                            <button id="info2-login">Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
