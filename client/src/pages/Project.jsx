import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
            <div className=''>
                <div className='text-3xl text-red-500'>
                    {project.title}
                </div>
                <pre>
                    {JSON.stringify(project, null, 2)}
                </pre>
            </div>
        )
    )
}

export default Project