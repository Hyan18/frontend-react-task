import React from 'react'
import './About.css'
import officeImg from '../../img/shutterstock_696636415.jpg'

function About () {
    return (
        <div className="about-div">
            <div id="about-content-container">
                <div id="title">
                    About us
                </div>
                <div id="subtitle">
                    Maecenas ligula magna, dapibus ut interdum eu, faucibus gravida sapien. Nunc id condimentum sapien, sed blandit ipsum.
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem turpis, laoreet eget blandit nec, laoreet vitae arcu. Donec rhoncus quam nec tincidunt dictum. Mauris pharetra consequat mi et tincidunt. Cras mollis rhoncus neque at pellentesque. Duis leo nisi, malesuada in egestas sit amet, semper nec dolor. Nulla facilisi. Cras ultrices neque at dui laoreet, id malesuada nisi blandit. Maecenas sed convallis orci. Maecenas aliquam pellentesque risus, id euismod lorem volutpat at. Suspendisse fermentum vulputate est ac scelerisque. Phasellus dignissim condimentum fermentum. <a href='/about-us'>Donec pretium pellentesque</a> risus, in facilisis lorem cursus sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
                <p>
                    Proin lacus elit, consequat posuere odio id, mattis luctus orci. Etiam luctus, ligula quis congue eleifend, est dolor convallis risus, eget pulvinar eros lectus et magna. Proin risus massa, condimentum quis sapien a, egestas ultrices leo. Maecenas faucibus eget odio id dapibus. Nam vel ligula at nulla placerat varius vitae sed diam. Donec dignissim ex nec lorem pretium, in vulputate elit mollis. Pellentesque tempus purus ac sodales scelerisque. Sed vel tempus urna. In hac habitasse platea dictumst. Nullam sollicitudin eros est, vitae lacinia diam blandit vel.
                </p>
                <div id='img-container'>
                    <img id="about-office-img" src={officeImg} alt="office-img"/>
                </div>
                <p>
                    Ut tincidunt, ipsum eget euismod laoreet, magna justo malesuada nibh, sit amet lacinia orci risus at ex. Nunc erat massa, ultrices vitae nunc eget, imperdiet ultrices nulla. Vivamus sit amet lorem hendrerit, faucibus lorem id, vehicula eros. Suspendisse vitae accumsan ipsum. Vivamus justo nunc, consequat et nisl vel, porta consequat odio. Fusce in auctor lacus, sed vulputate elit. Cras eget laoreet dui. Nullam blandit metus dolor, id auctor arcu ullamcorper condimentum. Proin dictum molestie sagittis. Etiam vel vulputate nulla. Maecenas aliquet felis quis turpis fringilla finibus. Sed blandit quam augue, id tristique sapien vestibulum nec. Phasellus eget venenatis urna. Praesent sit amet eros sem.
                </p>

                <div id="about-list">
                    <div id="list-subtitle">
                        Fusce laoreet fermentum blandit sapien:
                    </div>

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
                </div>

                <p>
                    Sed eros nisi, condimentum sed vulputate non, eleifend sed risus. Nulla maximus vitae augue in posuere. Donec vulputate urna a fringilla mollis. Aenean porttitor et libero eu porttitor. Praesent fringilla imperdiet odio, a hendrerit neque condimentum non. Nullam posuere rhoncus quam, sollicitudin aliquam elit malesuada vel. Etiam vulputate tempus sagittis.
                </p>

                <p>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. In dapibus risus vitae interdum varius. Etiam sit amet tincidunt ante. Morbi gravida, enim mattis scelerisque maximus, turpis mi scelerisque eros, ut accumsan ipsum leo at dui. Curabitur lorem mi, ultricies et aliquet et, hendrerit non est. Pellentesque imperdiet, diam sit amet tincidunt rhoncus, felis metus scelerisque metus, quis egestas orci orci in velit. Etiam pretium vulputate eros, in molestie odio commodo nec. Curabitur nulla lacus, finibus vitae magna varius, posuere egestas orci. Sed non nunc faucibus, laoreet lorem non, sollicitudin dui. Nam at justo eleifend, pretium libero in, volutpat dolor. Nullam ex odio, molestie non diam et, tincidunt faucibus tortor. Quisque rhoncus lacus sit amet lectus venenatis porta.
                </p>
            </div>
        </div>
    )
}

export default About
