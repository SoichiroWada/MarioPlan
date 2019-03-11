import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  console.log('0016:',projects);
  console.log('0014',projects.aid)
  
  return (
    <div className="project-list section">
      { projects && (projects).map( (project) => {
        return (
          <Link to={'/project/' + project.aid } key={project.aid}>
            <ProjectSummary project={project} />
          </Link>
        )
      })}  
    </div>
  )
}

export default ProjectList
