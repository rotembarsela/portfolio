import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ project }) => {
    const navigate = useNavigate()

    const handleClick = (project) => {
        navigate(`/projects/${project}`)
    }

    return (
        <div onClick={() => handleClick(project.title.toLowerCase())} className='relative text-white border-2 border-indigo-800 cursor-pointer h-52 hover:border-4 rounded-lg shadow-lg'>
            <img className='absolute rounded-md object-cover w-full h-full shadow-lg mix-blend-soft-light' src={project.images[0]} alt='projectBg' />
            <h3 className='absolute bottom-0 left-0 mx-2 my-1 text-xl'>{project.title}</h3>
        </div>
    )
}
export default ProjectCard