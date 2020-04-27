import React, { Component } from 'react'
import Carousel from '../Carousel/Carousel'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className='app-div'>
                <Carousel/>
            </div>
        )
    }
}

export default App
