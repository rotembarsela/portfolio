import React from 'react'

const IconUtil = ({ icon, isDarkModeIcon, setIsDarkMode }) => {
    return (
        <>
            {isDarkModeIcon ?
                <>
                    <div className='icon-util-darkmode' onClick={() => setIsDarkMode(prev => !prev)} >
                        {icon}
                    </div>
                </>
                :
                <>
                    <div className='icon-util' >
                        {icon}
                    </div>
                </>
            }
        </>
    )
}

export default IconUtil