import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className='app-div'>
                <Navbar/>
            </div>
        )
    }
}

export default App
