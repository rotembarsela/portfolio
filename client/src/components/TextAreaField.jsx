import React from 'react'

const TextAreaField = ({ name, label, handleChange }) => {
    return (
        <div className='flex flex-col '>
            <label className='uppercase' htmlFor={name}>{label}</label>
            <textarea className='p-2 bg-navbg' name={name} onChange={handleChange} />
        </div>
    )
}

export default TextAreaField