import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { demoSignIn } from '../../store/actions/authActions'

const style1 = { color:'yellow',  fontWeight:'bold',  fontSize:'1.5em' }

const SignedOutLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signin' onClick={props.demoSignIn} style={style1}>Demo login</NavLink></li>
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    demoSignIn: () => dispatch(demoSignIn())
  }
}

export default connect(null, mapDispatchToProps)(SignedOutLinks)