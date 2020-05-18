import React, { Component } from 'react'
import axios from 'axios'
import Swiper from 'react-id-swiper'
import SlideContent from '../SlideContent/SlideContent'
import './Carousel.css'

class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        this.get('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details')
    }

    get(url = 'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details') {
        axios.get(url)
            .then(
                (response) => {
                    this.setState({
                        isLoading: false,
                        slides: response.data.Details,
                    })
                },
                (error) => {
                    this.setState({
                        isLoading: false,
                        error
                    })
                })
    }

    render () {
        const { isLoading, slides, error } = this.state

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

        if (error) {
            return (
                <div className="carousel-div">
                    Error: {error.message}
                </div>
            )
        } else if (isLoading) {
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
                            backgroundSize: '1600px',
                            backgroundRepeat: "no-repeat",
                            backgroundPositionY: "25%",
                            backgroundImage: `linear-gradient(to right, rgb(0, 0, 0, 0.8) 210px, rgba(255,0,0,0) 800px), url("${slide.ImageUrl}")`
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
