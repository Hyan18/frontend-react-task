import React, { Component } from 'react'
import './SlideContent.css'
import PropTypes from 'prop-types'

class SlideContent extends Component {

    render () {
        const { title, subtitle } = this.props

            return (
                <div className="slide-content-div">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            )
    }
        
}

export default SlideContent

SlideContent.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}