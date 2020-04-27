import React, { Component } from 'react'
import axios from 'axios'

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

        if (isLoading) {
            return (
                <div className="carousel-div">
                    <span>Loading...</span>
                </div>
            )
        } else {
            return (
                <div className="carousel-div">
                    {slides[0].Title}
                </div>
            )
        }
    }
}

export default Carousel
