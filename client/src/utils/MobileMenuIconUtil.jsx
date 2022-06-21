import React from 'react'

const MobileMenuIconUtil = ({ icon, setOpen }) => {
    return (
        <div className='mobile-icon-util' onClick={() => setOpen(prev => !prev)}>
            {icon}
        </div>
    )
}

export default MobileMenuIconUtil