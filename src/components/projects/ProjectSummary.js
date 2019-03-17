import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
  // console.log(project.content);
  const lead = project.content.slice(0,100);

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="ps-block1">
          <span className="card-title ">{project.title}</span>
          <span className="card-lead">{lead} ...</span>
        </div>
        <div className="ps-block2">
          <p className="grey-text psp">Posted by {project.authorFirstName} {project.authorLastName}</p>
          <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary