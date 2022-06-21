import React from 'react'
import ContactImage from '../assets/contact-bg.jpg'
import PageHeader from '../components/PageHeader'

const Contact = () => {
    return (
        <div className='w-screen h-full'>
            <PageHeader
                headerBgImage={ContactImage}
                mainTitle={"Contact"}
                sectionTitle={"Get in touch with me"}
            />
        </div>
    )
}

export default Contact