import React from 'react'

const ProjectSummary = ({project}) => {
    return(
        <div className="card z-depth-0 project-summary">
        <div className="card-content black-text text-darken-1">
        <span className="project-title">{project.title}</span>
        <p>Posted by Jocatins</p>
        <p className="grey-text">2nd October 2022</p>
        </div>
        </div>
    )
} 

export default ProjectSummary