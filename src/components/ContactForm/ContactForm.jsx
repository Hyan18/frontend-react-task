import React, { Component } from 'react'
import './ContactForm.css'
import axios from 'axios'
import iconValid from '../../img/Icon_Valid.svg'
import iconSubmit from '../../img/Icon_Submit.svg'

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
            phoneNumberCount: 1,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAddPhoneNumber = this.handleAddPhoneNumber.bind(this)
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
        } else {
            const error_messages = data.Errors.map ( e => this.errorToMessage(e) )
            this.setState({
                hasError: true,
                errors: error_messages
            })
        }
    }

    errorToMessage(error) {
        switch (error.MessageCode) {
            case 'Required':
                 return `${error.FieldName} is required`
            case 'Invalid_Email_Address':
                return 'Email address is invalid'
            case 'Invalid_Phone_Number':
                return 'Phone number is invalid'
            case 'Max_Length_Exceeded':
                return 'The message provided exceeds the maximum length allowed'
            case 'Invalid_Postcode':
                return 'Not a valid UK postcode'
            case 'Server_Error':
                return 'Unexpected server error occurred'
            default:
                return 'Unknown error'
        }
    }

    handleAddPhoneNumber(event) {
        event.preventDefault()

        this.setState( (prevState) => {
            return {phoneNumberCount: prevState.phoneNumberCount + 1}
        })

    }

    render () {
        const { includeAddressDetails, submitted, hasError, errors, phoneNumberCount } = this.state

        var additionalPhoneNumbers = []

        for (var i = 1; i < (phoneNumberCount); i++) {
            additionalPhoneNumbers.push(<PhoneNumberInput key={i+1} n={i+1}/>)
        }

        if (submitted) {
            return (
                <div className='contact-form-div'>
                    <div className='form-success'>
                        <div id='success-content'>
                            <div className='circle'>
                                <img id='icon-valid' src={iconValid} alt=''/>
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
                    {hasError &&
                    <div id='errors'>
                        {errors.map(e => <p key='e'>{e}</p>)}
                    </div>
                    }
                    <form onSubmit={this.handleSubmit}>
                        <div className='inline-inputs'>
                            <label>
                                Full name
                                <input
                                    id="full-name"
                                    name="fullName"
                                    type="text"
                                    value={this.state.fullName}
                                    onChange={this.handleChange} />
                            </label>
                            <label>
                                Email address
                                <input
                                    id="email-address"
                                    name="emailAddress"
                                    type="text"
                                    value={this.state.emailAddress}
                                    onChange={this.handleChange} />
                            </label>
                        </div>
                        <label>
                            Phone number 01
                            <div className='optional-input'> - optional</div>
                            <input
                                className="phone-number"
                                name="phoneNumber"
                                type="text"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange} />
                        </label>
                        {/* should this be unlimited phone numbers that can be added? */}
                        {additionalPhoneNumbers}
                        <button id="add-phone-number" onClick={this.handleAddPhoneNumber}>
                            Add new phone number
                        </button>
                        <label>
                            Company name
                            <input
                                id="company-name"
                                name="companyName"
                                type="text"
                                value={this.state.companyName}
                                onChange={this.handleChange} />
                        </label>
                        <label>
                            <p className="align-left">Message</p>
                            <div className="align-right" id='msg_max_length'>
                                Maximum text length is 500 characters
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                type="text"
                                value={this.state.message}
                                onChange={this.handleChange} />
                        </label>
                        <div className="inline-inputs">
                            <input
                                id="include-address-details"
                                name="includeAddressDetails"
                                type="checkbox"
                                checked={this.state.includeAddressDetails}
                                onChange={this.handleChange} />
                            <label id="add-address-details">
                                Add address details
                            </label>
                        </div>
                        {includeAddressDetails &&
                        <div>
                            <div className='inline-inputs'>
                                <label>
                                    Address line 1
                                    <input
                                    id="address-line-1"
                                    name="addressLine1"
                                    type="text"
                                    value={this.state.addressLine1}
                                    onChange={this.handleChange} />
                                </label>
                                <label>
                                    Address line 2
                                    <div className='optional-input'> - optional</div>
                                    <input
                                    id="address-line-2"
                                    name="addressLine2"
                                    type="text"
                                    value={this.state.addressLine2}
                                    onChange={this.handleChange} />
                                </label>
                            </div>
                            <div className='inline-inputs'>
                                <label>
                                    City/Town
                                    <input
                                    id="city-or-town"
                                    name="cityOrTown"
                                    type="text"
                                    value={this.state.city}
                                    onChange={this.handleChange} />
                                </label>
                                <label>
                                    State/County
                                    <input
                                    id="state-or-oounty"
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
                        <button id="form-submit" type="submit">
                            <img id="icon-submit" className="align-left" src={iconSubmit} alt=''/>
                            <p id="text-submit">Submit</p>
                        </button>
                    </form>
                </div>
            )
        }
    }
}

export default ContactForm

const PhoneNumberInput = props => (
    <label>
        Phone number 0{props.n}
        <div className='optional-input'> - optional</div>
        <input
            className="phone-number"
            type="text" />
    </label>
)