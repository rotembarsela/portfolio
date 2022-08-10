import React from 'react'

const TextAreaField = ({ name, label }) => {
    return (
        <div className='flex flex-col '>
            <label className='uppercase' htmlFor={name}>{label}</label>
            <textarea className='p-2 bg-navbg' name={name} />
        </div>
    )
}

export default TextAreaField