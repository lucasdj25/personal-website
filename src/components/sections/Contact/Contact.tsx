import React, { FormEvent, useEffect, useState } from 'react';
import './Contact.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';
import emailjs from '@emailjs/browser';
import MessageBanner from '../../Common/MessageBanner/MessageBanner';
import TransitionInWrapper from '../../Common/TransitionInWrapper';

function Contact() {

    const publicKey = "ae8WlPlyqP7uEps8i"
    const serviceID = "service_lptnyya"
    const templateID = "template_dw8jg8k"

    useEffect(() => {
        emailjs.init(publicKey)

    }, [])

    const sendEmail = (e: FormEvent) => {
        e.preventDefault()
        setSendError(false)
        setLoading(true)

        const inputField = {
            name: name,
            email: email,
            message: message
        }

        emailjs.send(serviceID, templateID, inputField)
            .then(() => {
                setLoading(false)
                setSendError(false)
                setName("")
                setEmail("")
                setMessage("")
                setBannerMessage("Message sent successfully!")
            }, (error: any) => {
                setLoading(false)
                setSendError(true)
                setBannerMessage("Unable to send message. Email limit may have been reached.")
                console.log(`ERROR: ${error}`)
            })

    }

    const closeBanner = () => {
        setBannerMessage("")
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)


    const [bannerMessage, setBannerMessage] = useState("")
    const [sendError, setSendError] = useState(true)

    return (
        <div id="contact-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Contact' desc='I would love to hear from you!' light={false} />
                <TransitionInWrapper className='contact-transition-wrapper'>
                    <form onSubmit={sendEmail} className='contact-form'>
                        {bannerMessage.length > 0 && (<MessageBanner message={bannerMessage} error={sendError} close={closeBanner} />)}
                        <input required type='text' placeholder='Your name' value={name} onChange={(event) => { setName(event.target.value) }} />
                        <input required type='email' placeholder='Your email' value={email} onChange={(event) => { setEmail(event.target.value) }} />
                        <textarea required rows={6} placeholder='Your message' value={message} onChange={(event) => { setMessage(event.target.value) }} />
                        <button type='submit' className='button'>{loading ? "Sending message..." : "Send Message"}</button>
                        <div className='contact-note'>
                            <p>Note - For my contact service I am using the free version of EmailJS which has a limit on the number of emails sent, if your message is not sending
                                then the limit may have been exceeded. Feel free to email me directly at <a href='mailto:lucasjmax@gmail.com'>lucasjmax@gmail.com</a> and I apologize for the inconvenience!
                            </p>
                        </div>
                    </form>
                </TransitionInWrapper>
            </div>
        </div>
    );
}

export default Contact;