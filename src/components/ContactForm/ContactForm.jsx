import React, { Component } from 'react'
import './ContactForm.css'

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            emailAddress: '',
            phoneNumber: '',
            message: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value

        this.setState({
            [name]: value
        })
    }
    
    handleSubmit(event) {
        alert('A name was submitted:')
        console.log(this.state)
        event.preventDefault()
    }

    render () {
        return (
            <div className='contact-form-div'>
                <form onSubmit={this.handleSubmit}>
                    <div className='nameEmail'>
                        <label>
                            Full name
                            <input
                                name="fullName"
                                type="text"
                                value={this.state.fullName}
                                onChange={this.handleChange} />
                        </label>
                        <label className='formEmail'>
                            Email address
                            <input
                                name="emailAddress"
                                type="text"
                                value={this.state.emailAddress}
                                onChange={this.handleChange} />
                        </label>
                    </div>
                    <label>
                        Phone number
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            value={this.state.phoneNumber}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Message
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            value={this.state.message}
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ContactForm
