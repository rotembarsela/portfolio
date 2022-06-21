import React from 'react'
import ProfileImage from '../assets/profile.jpg'
import HomeImage from '../assets/home-bg.jpg'
import PageHeader from '../components/PageHeader'
import SectionUtil from '../utils/SectionUtil'

const Home = () => {
    return (
        <div className='w-screen h-full'>
            <PageHeader
                headerBgImage={HomeImage}
                miniHeaderImage={ProfileImage}
                mainTitle={"Rotem Bar-Sela"}
                sectionTitle={"Fullstack Developer"}
            />
            {/* Body */}
            <div className='flex flex-row justify-between mx-3 my-2 text-white'>
                <div className='flex flex-col items-start w-full h-full gap-5 md:w-1/2'>
                    {/* TODO: make it dynamic */}
                    <SectionUtil
                        sectionTitle={"About me"}
                        sectionDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin nulla libero, non tincidunt elit pharetra eu. Vivamus non tortor eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}
                    />
                    <SectionUtil
                        sectionTitle={"Knowledge"}
                        sectionDescription={"Javascript, Java, C#, SQL, OOP"}
                    />
                    <SectionUtil
                        sectionTitle={"Frameworks"}
                        sectionDescription={"React.js, Angular, Node.js, Firebase"}
                    />
                    <SectionUtil
                        sectionTitle={"Portfolio Website"}
                        sectionDescription={"React.js v18, React Router Dom v6, React-Paginate, Node.js, MongoDB, RapidAPI"}
                    />
                </div>
                <div className='flex-col items-start hidden w-1/2 gap-3 md:flex'>

                </div>
            </div>
        </div>
    )
}

export default Home