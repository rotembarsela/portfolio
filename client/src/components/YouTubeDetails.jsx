import React from 'react'

const YouTubeDetails = ({ youtubeVideo }) => {
    return (
        <div className='flex flex-col justify-around items-center w-full h-full p-2 '>
            <h2 className='text-xl'>Channel:<br />{youtubeVideo?.video?.channelName}</h2>
            <div className='flex flex-col items-center'>
                <h3 className='text-lg'>Video Title:</h3>
                <span>{youtubeVideo?.video?.title}</span>
            </div>
            <div className='flex flex-row'>
                <img loading='lazy' className='w-64 h-32  cursor-pointer rounded-lg' src={youtubeVideo?.video?.thumbnails[0]?.url} alt='youtube' />
            </div>
        </div>
    )
}

export default YouTubeDetails