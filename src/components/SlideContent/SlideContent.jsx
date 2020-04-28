import React, { Component } from 'react'
import './SlideContent.css'

class SlideContent extends Component {
    constructor(props) {
        super(props)
    }

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