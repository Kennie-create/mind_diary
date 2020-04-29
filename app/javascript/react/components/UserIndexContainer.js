import React from 'react'
import {Link} from 'react-router-dom'

const UserIndexContainer = (props) => {

  return(
    <div className="user-welcome-page">
      <h1 className="user-welcome-text">
        Welcome to your sanctuary
      </h1>

      <div>
        <p className="user-welcome-paragraph">
          Which zen space would you like to visit today?
        </p>
          <Link className="welcome-button" to="/journals"> My Journals -</Link> 
          <Link className="welcome-button" to="/prescriptions"> My Prescriptions</Link>
      </div>
    </div>

  )
}
export default UserIndexContainer
