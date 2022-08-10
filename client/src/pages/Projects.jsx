import React from 'react'
import ProjectsImage from '../assets/projects-bg.jpg'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/projects'

const Projects = () => {
    return (
        <div className='w-full h-full'>
            <PageHeader
                headerBgImage={ProjectsImage}
                mainTitle={"Projects"}
                sectionTitle={"List of my projects"}
            />
            <div className='flex flex-col'>
                <div className='grid gap-3 mx-3 my-3 md:grid-cols-4'>
                    {projectsData.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects