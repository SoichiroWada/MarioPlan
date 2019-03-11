import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import { getProject } from '../../store/actions/projectActions'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  componentDidMount(){
    const { getProject } = this.props;
    getProject();
  }
  render() {
    console.log('this.props in class Dashboard:',this.props);
    const { projects, auth, notifications } = this.props;
    console.log('project.projects:',projects)
    
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('555 state in dashboard', state);
  console.log('666 state.project in dashboard', state.project);
  console.log('state.firebase:',state.firebase)
  console.log(ownProps);
  return {
    projects: state.project.projects,
    auth: state.firebase.auth,
    notifications: state.project.notifications
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProject: (project) => dispatch(getProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     { collection: 'projects', orderBy: ['createdAt', 'desc']},
//     { collection: 'notifications', limit: 6, orderBy: ['time', 'desc']}
//   ])
// )(Dashboard)