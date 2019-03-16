import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProject } from '../../store/actions/projectActions'
import { cancel } from '../../store/actions/contentActions'
import { Redirect } from 'react-router-dom'
import TextareaAutosize from 'react-textarea-autosize';

class EditProject extends Component {
  state = {
    id:'',
    title:'',
    content:''
  }

  componentDidMount(){
    this.setState({
      id:this.props.id,
      title:this.props.title,
      content:this.props.content
    })
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      // console.log(this.state);
      this.props.updateProject(this.state);
      this.props.history.push('/');
  }

  handleCancel = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const id = this.props.match.params.id;
    this.props.cancel(this.state);
    this.props.history.push('/project/'+id);
}

  render() {
      const { auth } = this.props;  
      console.log('this.props in render:',this.props)
      if (!auth.uid) return <Redirect to='/signin' /> 
      return (
      <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="pink-text text-lighten-2 eh5">Edit Project</h5>
            <div className="input-field col s12 active title">
                <input id="title" type="text" onChange={this.handleChange} 
                value={this.state.title} />
                <label className="active" htmlFor="title">Project Title</label>
            </div>
            <div className="input-field col s12 active pcon">
                <TextareaAutosize id="content" className="materialize-textarea" onChange={this.handleChange}
                value={this.state.content} ></TextareaAutosize>
                <label className="active" htmlFor="content">Project Content</label>
            </div>
            <div className="buttons">
                <button className="btn pink lighten-2">Update</button>
                <button className="waves-effect waves-light btn" onClick={this.handleCancel} id="cancel">Cancel</button>
            </div>
          </form>
      </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {

    return {
      id:state.content.id,
      title:state.content.title,
      content:state.content.content,
      auth: state.firebase.auth
    }
  }
  
  const mapDispatchActionToProps = dispatch => {
    return {
      updateProject: (id) => { dispatch(updateProject(id)) },
      cancel: (id) => { dispatch(cancel(id)) }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchActionToProps)(EditProject)