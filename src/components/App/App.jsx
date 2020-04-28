import React, { Component } from 'react'
import Carousel from '../Carousel/Carousel'
import Navbar from '../Navbar/Navbar'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className='app-div'>
                <Navbar/>
                <Carousel/>
            </div>
        )
    }
}

export default App
