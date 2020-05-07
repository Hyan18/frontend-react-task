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
                        <p className="info-text">
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
        </div>
    )
}

export default Home
