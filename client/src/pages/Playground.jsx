import React, { useState } from 'react'
import SkillsImage from '../assets/skills-bg.jpg'
import LazyLoading from '../components/LazyLoading'
import PageHeader from '../components/PageHeader'
import Pagination from '../components/Pagination'

const Playground = () => {
    const [toggleState, setToggleState] = useState("pagination")

    const toggleTabs = (tabName) => {
        setToggleState(tabName)
    }

    return (
        <div className='w-screen h-full'>
            <PageHeader
                headerBgImage={SkillsImage}
                mainTitle={"Playground"}
                sectionTitle={"Displaying data from an API"}
            />
            <div className='flex flex-col p-2 space-y-3 text-white'>
                <div className='flex flex-col'>
                    <h3 className='text-md'>{`On this page I will fetch data from an public API using RapidAPI database storage and display it using Pagination || Lazy Loading approach.`}</h3>
                    <div className='flex flex-col md:flex-row gap-1 md:gap-2 md:items-center'>
                        <span className='underline-offset-2 underline text-primary font-bold'>Databases link:</span>
                        <a className='font-bold hover:underline underline-offset-2' href='https://rapidapi.com/mturchik/api/poke-info-api/' target="_blank" rel="noopener noreferrer">{`poke-info-api`}</a>
                        <span className='hidden md:block'>/</span>
                        <a className='font-bold hover:underline underline-offset-2' href='https://rapidapi.com/h0p3rwe/api/youtube-search-and-download/' target="_blank" rel="noopener noreferrer">{`Youtube Search and Download`}</a>
                    </div>
                </div>
                <div className='flex flex-row justify-center'>
                    <div className={toggleState === 'pagination' ? 'tab tab-active' : 'tab'} onClick={() => toggleTabs("pagination")}>
                        Pagination
                    </div>
                    <div className={toggleState === 'lazyloading' ? 'tab tab-active' : 'tab'} onClick={() => toggleTabs("lazyloading")}>
                        Lazy Loading
                    </div>
                </div>
                {/* Pagination */}
                <div className={toggleState === 'pagination' ? 'content-active h-[83vh] md:h-[42vh]' : 'content'}>
                    <Pagination />
                </div>
                {/* Lazy Loading */}
                <div className={toggleState === 'lazyloading' ? 'content-active h-[70vh] md:h-[42vh]' : 'content'}>
                    <LazyLoading />
                </div>
            </div>
        </div>
    )
}

export default Playground