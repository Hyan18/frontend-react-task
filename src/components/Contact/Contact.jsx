import React from 'react'
import './Contact.css'
import ContactForm from '../ContactForm/ContactForm'

function Contact () {
    return (
        <div className='contact-div'>
            <div className='contact-content'>
                <h3>Contact us</h3>
                <p>
                Integer iaculis fringilla consectetur. Vivamus placerat ligula a magna varius maximus. Curabitur nisi elit, eleifend quis augue eu, aliquet luctus nisi. 
                </p>
                <ContactForm/>
            </div>
        </div>
    )
}

export default Contact
