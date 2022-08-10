import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import ContactImage from '../assets/contact-bg.jpg'
import PageHeader from '../components/PageHeader'
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from 'react-icons/io5'
import { useState } from 'react'
import InputField from '../components/InputField'
import TextAreaField from '../components/TextAreaField'

const Contact = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccess(false)
        setError(false)
        emailjs.sendForm(
            'service_biofwsl',
            'template_5tb81fc',
            form.current,
            'HywHYUYGC9AtwemvU'
        )
            .then(() => {
                e.target.reset()
                setSuccess(true)
            }, (error) => {
                setError(true)
            });
    };

    return (
        <div className='w-screen h-full'>
            <PageHeader
                headerBgImage={ContactImage}
                mainTitle={"Contact"}
                sectionTitle={"Keep in touch with me 😉"}
            />
            <form ref={form} onSubmit={sendEmail}>
                <div className='flex flex-row justify-center text-white w-full mt-20'>
                    <div className='flex flex-col gap-3 w-[90%] md:w-1/2'>
                        {success &&
                            <div className='bg-green-500 border rounded-lg flex justify-center items-center gap-3'>
                                <p className=''>Email has been sent successfully</p>
                                <IoCheckmarkCircleOutline />
                            </div>
                        }
                        {error &&
                            <div className='bg-red-500 border rounded-lg flex justify-center items-center gap-3'>
                                <p className=''>Something went wrong, please try again</p>
                                <IoCloseCircleOutline />
                            </div>
                        }
                        <InputField type="text" name="user_name" label="Name" />
                        <InputField type="email" name="user_email" label="Email" />
                        <TextAreaField name="message" label="Message" />
                        <button className='bg-primary uppercase border-2 p-2 border-navbg hover:border-indigo-200' type="submit">Send</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default Contact