import React from 'react'
import { connect } from 'react-redux'
import { deleteProject } from '../../store/actions/projectActions'
import { fetchProject } from '../../store/actions/contentActions'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import '../../index.css';

const ProjectDetails = (props) => {
  const { project, auth } = props;
  console.log('id:', props.dbId)

  const handleDelete = () => {
    props.deleteProject(props.dbId);
    props.history.push('/');
  }

  const handleFetch = () => {
    // console.log('props in ProjectDetails:', props);
    const fobj = {
      id:props.dbId,
      title:props.project.title,
      content:props.project.content
      }
    props.fetchProject(fobj);
    props.history.push('/edit/' + props.dbId);
  }
  
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <hr></hr>
            <p id="pjc">{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
        <div className='buttons'>
          <button className="waves-effect waves-light btn" onClick={handleFetch}>Edit</button>
          <button id="btnDel" className="waves-effect waves-light btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("state:",state);
  // console.log("ownProps:",ownProps);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth,
    dbId: id
  }
}

const mapDispatchActionToProps = dispatch => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id)),
    fetchProject: (obj) => dispatch(fetchProject(obj)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchActionToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)