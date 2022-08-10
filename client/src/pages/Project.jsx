import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { projectsData } from '../data/projects'

const Project = () => {
    const { projectName } = useParams()
    const navigate = useNavigate()
    const [project] = useState(
        projectsData.find((project) => project.title.toLowerCase() === projectName)
    )

    useEffect(() => {
        if (!project)
            navigate('/projects', { replace: true })
    }, [navigate, project])

    return (
        project && (
            <div className='flex flex-col w-full h-full'>
                <PageHeader
                    headerBgImage={project.images[0]}
                    mainTitle={project.title}
                    sectionTitle={`projects/${project.title.toLowerCase()}`}
                />
                <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3 h-full p-3 text-white'>
                    <div className='w-full md:w-1/2 flex flex-col gap-3'>
                        <div className='flex flex-col gap-3'>
                            <span className='text-lg'>
                                {project.description}
                            </span>
                            <h2 className='text-2xl border-b-2 border-primary w-fit'>
                                Technologies
                            </h2>
                            <div className='border-2 p-3 flex flex-col gap-3 shadow-lg'>
                                {/* Frontend */}
                                {project.frontend && (
                                    <div className='flex flex-row items-center gap-3 flex-wrap'>
                                        <h3>Frontend:</h3>
                                        {project.frontend.map((item, idx) => (
                                            <button className='border p-2 transition-all duration-200 ease-linear hover:bg-primary' key={item + idx}>
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                )}
                                {/* Backend */}
                                {project.backend && (
                                    <div className='flex flex-row items-center gap-3 flex-wrap'>
                                        <h3>Backend:</h3>
                                        {project.backend.map((item, idx) => (
                                            <button className='border p-2 transition-all duration-200 ease-linear hover:bg-primary' key={item + idx}>
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className='flex flex-row gap-3'>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='border p-3 w-fit transition-all duration-200 ease-linear hover:bg-primary rounded-sm shadow-lg'>
                                    Source Code
                                </a>
                                {project.websiteLink && (
                                    <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className='border p-3 w-fit transition-all duration-200 ease-linear hover:bg-primary rounded-sm shadow-lg'>
                                        Website
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 md:mb-0'>
                            {project.images && (
                                project.images.map((image, idx) => (
                                    <img key={idx} className='w-full h-48 md:h-56 object-cover object-top rounded-md shadow-lg' src={image} alt="project_img" />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Project