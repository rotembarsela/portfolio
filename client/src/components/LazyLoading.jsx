import React, { useState, useEffect, useRef, useCallback } from 'react'
import { youtubeOptions } from '../api/rapidApiOptions'
import useAxios from '../hooks/useAxios'
import YouTubeDetails from './YouTubeDetails'

const LazyLoading = () => {
    const [query, setQuery] = useState('pokemons')
    const { data, loading, hasMore, reFetch } = useAxios(`https://youtube-search-and-download.p.rapidapi.com/search?type=video`, youtubeOptions, query)
    const [selectedVideo, setSelectedVideo] = useState({})

    const observer = useRef()
    const lastItemEleRef = useCallback((node) => {
        if (loading) {
            return
        }
        if (observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver(entries => {
            // hasMore => check if there are more results from the search data
            if (entries[0].isIntersecting && hasMore) {
                reFetch()
            }
        })
        if (node) {
            observer.current.observe(node)
        }
    }, [loading, hasMore, reFetch])

    useEffect(() => {
        if (!loading) {
            setSelectedVideo(data[0])
        }
    }, [data, loading])

    const searchYouTube = (e) => {
        setQuery(e.target.value)
    }

    console.log(selectedVideo)

    return (
        <>
            <input className='w-full p-2 mb-2 text-black border-2 md:w-fit border-primary' placeholder='Search...' value={query} onChange={(e) => searchYouTube(e)} />
            <div className='flex flex-col md:flex-row h-full w-full bg-navbg p-3'>
                <>
                    <div className='w-1/2 overflow-auto flex flex-col gap-2 font-semibold'>
                        {data.length === 0 ? <p className='h-full w-full'>Loading...</p> :
                            <>
                                {data?.map((ytItem, idx) => {
                                    if (data?.length === idx + 1) {
                                        return (
                                            <div key={idx} ref={lastItemEleRef} className='flex flex-col cursor-pointer' onClick={() => setSelectedVideo(ytItem)}>
                                                <span className='flex-grow'>{ytItem?.video?.title}</span>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div key={idx} className='flex flex-col cursor-pointer hover:bg-primary' onClick={() => setSelectedVideo(ytItem)}>
                                                <span className='flex-grow'>{ytItem?.video?.title}</span>
                                            </div>
                                        )
                                    }
                                })}
                                {loading && <span className='flex-grow'>Loading...</span>}
                            </>
                        }
                    </div>
                </>
                {data.length === 0 ? "" :
                    <>
                        <div className='flex w-1/2'>
                            <YouTubeDetails youtubeVideo={selectedVideo} />
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default LazyLoading