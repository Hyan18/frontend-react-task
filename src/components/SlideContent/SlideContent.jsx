import React, { Component } from 'react'
import './SlideContent.css'
import PropTypes from 'prop-types'

class SlideContent extends Component {

    render () {
        const { title, subtitle } = this.props

            return (
                <div className="slide-content-div">
                    <div className="text-content">
                        <p className="title">{title}</p>
                        <p className="subtitle">{subtitle}</p>
                        <button className="dark-blue-button">Contact us</button>
                    </div>
                </div>
            )
    }
        
}

export default SlideContent

SlideContent.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}