import React from 'react'

const SectionUtil = ({ sectionTitle, sectionDescription }) => {
    return (
        <div className='flex flex-col gap-1'>
            <h3 className='uppercase border-b-2 border-primary w-fit'>{sectionTitle}</h3>
            <p className='text-md'>
                {sectionDescription}
            </p>
        </div>
    )
}

export default SectionUtil