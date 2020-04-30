import React, { Component } from 'react'
import './ContactForm.css'
import axios from 'axios'
import Valid from '../../img/Icon_Valid.svg'

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            emailAddress: '',
            phoneNumber: '',
            companyName: '',
            message: '',
            includeAddressDetails: false,
            addressLine1: '',
            addressLine2: '',
            cityOrTown: '',
            stateOrCounty: '',
            postcode: '',
            country: '',
            submitted: false,
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
        event.preventDefault()
        console.log(this.state)
        axios.post('https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit', {
            "FullName": this.state.fullName,
            "EmailAddress": this.state.emailAddress,
            "PhoneNumber": this.state.phoneNumber,
            "CompanyName": this.state.companyName,
            "Message": this.state.message,
            "bIncludeAddressDetails": this.state.includeAddressDetails,
            "AddressLine1": this.state.addressLine1,
            "AddressLine2": this.state.addressLine2,
            "CityTown": this.state.cityOrTown,
            "StateCounty": this.state.stateOrCounty,
            "Postcode": this.state.postcode,
            "Country": this.state.country
            })
            .then(
                (response) => {
                    this.formValidate(response.data)
                },
                (error) => {
                    console.log(error)
                })
    }

    formValidate(data) {
        if (data.Status === "1") {
            this.setState({
                submitted: true
            })
        }
    }

    render () {
        const { includeAddressDetails, submitted } = this.state

        if (submitted) {
            return (
                <div className='contact-form-div'>
                    <div className='form-success'>
                        <div id='success-content'>
                            <div className='circle'>
                                <img id='valid-tick' src={Valid}/>
                            </div>
                            <div id='success-title'>
                                Your message has been sent
                            </div>
                            <div id='success-subtitle'>
                                We will be in contact with you within 24 hours.
                            </div>
                        </div>
                            
                    </div>
                </div>
            )
        } else {
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
                            Company name
                            <input
                                id="companyName"
                                name="companyName"
                                type="text"
                                value={this.state.companyName}
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
}

export default ContactForm
