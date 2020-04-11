import React from "react";

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
        <div className="card z-depth-0">
        <div className="card-content">
        <span className="card-title">Project Title - {id}</span>
        <p>We are going to create a massive network just from the ether</p>
        </div>
        <div className="card-action blue lighten-2 white-text">
        <div> Posted by Jocatins </div>
        <div> 2nd Oct 2023</div>
        </div>
        </div>
        </div>
    )
}

export default ProjectDetails