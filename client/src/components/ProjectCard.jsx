import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <div className='relative text-white border-4 border-indigo-800 cursor-pointer h-52 hover:border-2'>
            <img className='absolute object-cover w-full h-full shadow-lg mix-blend-soft-light' src={project.images[0]} alt='projectBg' />
            <h3 className='absolute bottom-0 left-0 mx-2 my-1 text-xl'>{project.title}</h3>
        </div>
    )
}

export default ProjectCard