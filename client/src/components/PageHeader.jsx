import React from 'react'

const PageHeader = ({ headerBgImage, miniHeaderImage, mainTitle, sectionTitle }) => {
    return (
        <div className='relative flex flex-row justify-between object-contain h-64 min-h-[256px] text-white bg-gradient-to-b from-websitebg to-navbg'>
            <img className='absolute object-cover w-full h-full shadow-lg mix-blend-overlay' src={headerBgImage} alt='profile' />
            {/* Left */}
            <div className='relative flex flex-col justify-end p-2'>
                <h3 className='text-4xl md:text-5xl'>{mainTitle}</h3>
                <p className='text-lg pl-0.5 text-gray-300 font-medium'>{sectionTitle}</p>
            </div>
            {/* Right */}
            <div className=''>
                {miniHeaderImage &&
                    <>
                        <img className='relative hidden mx-10 my-10 border-2 rounded-full md:block w-44 h-44 hover:border-primary' src={miniHeaderImage} alt='profileImage' />
                    </>
                }
            </div>
        </div>
    )
}

export default PageHeader