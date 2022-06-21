import React from 'react'

const YouTubeDetails = ({ youtubeVideo }) => {
    console.log(youtubeVideo)
    return (
        <div className='flex flex-col justify-between items-center w-full h-full p-2 '>
            <p>Channel:&nbsp;{youtubeVideo?.video?.channelName}</p>
            <p className='overflow-ellipsis overflow-hidden whitespace-nowrap w-[80%]'>Video Title:&nbsp;#{youtubeVideo?.video?.title}</p>
            <div className='flex flex-row'>
                <img loading='lazy' className='w-48 h-48 border-2 cursor-pointer hover:border border-primary' src={youtubeVideo?.video?.thumbnails[0]?.url} alt='youtube' />
            </div>
        </div>
    )
}

export default YouTubeDetails