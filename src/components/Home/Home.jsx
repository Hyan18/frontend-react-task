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

                    <img id="office-img" src={officeImg} alt="office-img"/>
                </div>
            </div>

            <div id="info2-container">
                <div id="info2">
                    <div id="info2-text-container">
                        <div id="info2-text">
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

            <div id="info3-container">
                <div id="info3">
                    <div id="info3-title-container">
                        <p id="info3-title" className="info-title">
                            Nam tincidunt, augue ut lacinia placerat 
                        </p>
                        <p id="info3-subtitle">
                            Pellentesque ac tempus leo, eget  
                        </p>
                    </div>
                    <div id="info3-text-container">
                        <div id="info3-text">
                            <p id="info3-subtext" className="info-subtext">
                                <p id="opening-paragraph">
                                    {paragraph_1}
                                </p>
                                <p>
                                    {paragraph_2}
                                </p>
                                <p>
                                    {paragraph_3}
                                </p>
                            </p>
                        </div>
                    </div>
                    <button className="dark-blue-button">Contact us</button>
                </div>
            </div>

        </div>
    )
}

export default Home

const paragraph_1 = "Phasellus ut commodo lorem, eu dictum quam. Nunc vel odio dui. Fusce dignissim augue lacus, a imperdiet eros pretium nec. Etiam fermentum, est eget lobortis interdum, erat lorem placerat arcu, sit amet consequat dui dolor ac tellus. Nulla nec commodo velit. Morbi sollicitudin quis dui nec fringilla. Mauris efficitur ut quam at maximus. Duis a eros ac libero volutpat aliquet. Donec sit amet tellus ac lacus porta mollis non suscipit mauris. Suspendisse eleifend suscipit mauris, non aliquet dolor maximus ut. Maecenas varius neque felis, ut aliquet ligula fermentum fringilla. Nam semper odio id erat mollis posuere."

const paragraph_2 = "Maecenas fermentum tincidunt augue et venenatis. Nam varius accumsan eleifend. Sed arcu elit, egestas eu magna a, sagittis fermentum neque. Vivamus viverra dui nec risus pharetra, ut euismod ante blandit. Proin vel eleifend nisl, at hendrerit magna. Sed et ipsum sed leo pharetra sodales. Cras et tempus magna. Integer purus augue, feugiat nec dictum at, consectetur a nunc. Duis luctus eu felis non mollis. Nunc sagittis leo nisi, ac hendrerit sem elementum vitae. Vivamus eu ligula metus. Nunc tincidunt a leo tincidunt venenatis. Nam porta tristique sapien sed porta. Curabitur sodales ipsum quis nunc commodo, non lobortis tellus mollis. Integer nec aliquam magna, facilisis vulputate velit. Etiam nisl metus, molestie mattis sodales at, egestas rhoncus elit."

const paragraph_3 = "Vivamus egestas sapien non metus interdum tempus. Pellentesque fringilla ligula ut lacinia volutpat. Nam enim nulla, porttitor vel iaculis et, elementum in felis. Quisque vitae elit viverra, pulvinar felis non, tristique lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sit amet purus feugiat, rhoncus libero et, dapibus lectus. Nullam id metus sed dolor tincidunt sollicitudin. Suspendisse quis nunc elementum, vulputate tortor et, tempus lectus. Phasellus leo odio, sagittis quis lectus eu, lobortis mattis justo. Fusce ligula metus, euismod eget varius eget, commodo sit amet velit. Phasellus sed maximus metus. Duis sodales porta diam non lacinia. Aenean ultricies ex a diam dignissim, nec blandit nisl posuere. Ut maximus dolor at neque congue cursus. Vestibulum ex velit, faucibus eget diam at, porta aliquam felis. Donec quis orci tincidunt erat tincidunt vehicula id sed metus. orbi vitae imperdiet eros. Praesent velit enim, faucibus consequat metus ac, tincidunt consequat felis. Integer pretium blandit risus, eget molestie urna. Sed scelerisque, felis vel tincidunt dignissim, mauris neque pharetra erat, ac malesuada mi ipsum sed quam. Cras auctor neque diam. Duis commodo erat quis iaculis scelerisque. Curabitur augue nunc, scelerisque placerat metus sit amet, dapibus imperdiet risus."
