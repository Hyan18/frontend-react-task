import React, { Component } from 'react'
import axios from 'axios'
import Swiper from 'react-id-swiper'
import './Carousel.css'
import SlideContent from '../SlideContent/SlideContent'

class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        axios.get('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details')
          .then(
            (response) => {
                this.setState({
                    isLoading: false,
                    slides: response.data.Details,
                })
            })
    }

    render () {
        const { isLoading, slides } = this.state

        const params = {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
        }

        if (isLoading) {
            return (
                <div className="carousel-div">
                    <span>Loading...</span>
                </div>
            )
        } else {
            return (
                <div className="carousel-div">
                    <Swiper {...params}>
                        {slides.map(slide => 
                        <section className="slide" key={slide.Title} style={{
                            height: "440px",
                            width: "1600px",
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundImage: `linear-gradient(to right, rgb(51, 51, 51, 1), rgba(255,0,0,0) 75%), url("${slide.ImageUrl}")`
                        }}>
                            <SlideContent title={slide.Title} subtitle={slide.Subtitle}/>
                        </section>)}
                    </Swiper>
                </div>
            )
        }
    }
}

export default Carousel
