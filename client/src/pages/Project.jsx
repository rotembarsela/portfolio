import React from 'react'
import { useParams } from 'react-router-dom'

const Project = () => {
    const { projectName } = useParams()

    return (
        <div>{projectName}</div>
    )
}

export default Project