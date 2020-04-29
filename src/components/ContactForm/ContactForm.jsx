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
            addressLine1: '',
            addressLine2: '',
            cityOrTown: '',
            stateOrCounty: '',
            postcode: '',
            country: '',
            includeAddressDetails: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.name === 'includeAddressDetails' ? target.checked : target.value

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
        const includeAddressDetails = this.state.includeAddressDetails

        return (
            <div className='contact-form-div'>
                <form onSubmit={this.handleSubmit}>
                    <div className='inlineInputs'>
                        <label>
                            Full name
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={this.state.fullName}
                                onChange={this.handleChange} />
                        </label>
                        <label>
                            Email address
                            <input
                                id="emailAddress"
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
                    <div className="inlineInputs">
                        <input
                            id="includeAddressDetails"
                            name="includeAddressDetails"
                            type="checkbox"
                            checked={this.state.includeAddressDetails}
                            onChange={this.handleChange} />
                        <label id="addAddressDetails">
                            Add address details
                        </label>
                    </div>
                    {includeAddressDetails &&
                    <div>
                        <div className='inlineInputs'>
                            <label>
                                Address line 1
                                <input
                                id="addressLine1"
                                name="addressLine1"
                                type="text"
                                value={this.state.addressLine1}
                                onChange={this.handleChange} />
                            </label>
                            <label>
                                Address line 2
                                <input
                                id="addressLine2"
                                name="addressLine2"
                                type="text"
                                value={this.state.addressLine2}
                                onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className='inlineInputs'>
                            <label>
                                City/Town
                                <input
                                id="cityOrTown"
                                name="cityOrTown"
                                type="text"
                                value={this.state.city}
                                onChange={this.handleChange} />
                            </label>
                            <label>
                                State/County
                                <input
                                id="stateOrCounty"
                                name="stateOrCounty"
                                type="text"
                                value={this.state.stateOrCounty}
                                onChange={this.handleChange} />
                            </label>
                            <label>
                                Postcode
                                <input
                                id="postcode"
                                name="postcode"
                                type="text"
                                value={this.state.postcode}
                                onChange={this.handleChange} />
                            </label>
                            <label>
                                Country
                                <input
                                id="country"
                                name="country"
                                type="text"
                                value={this.state.country}
                                onChange={this.handleChange} />
                            </label>
                        </div>
                    </div>
                    }
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ContactForm
