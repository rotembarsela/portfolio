import React from 'react'

const InputField = ({ type, name, label }) => {
    return (
        <div className='flex flex-col'>
            <label className='uppercase' htmlFor={name}>{label}</label>
            <input className='p-2 bg-navbg' type={type} name={name} required />
        </div>
    )
}

export default InputField