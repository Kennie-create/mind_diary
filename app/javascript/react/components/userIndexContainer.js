import React from 'react'
import {Link} from 'react-router-dom'

const UserIndexContainer = (props) => {

  return(
    <div className="welcome-page">
      <h1 className="welcome-text">
        Welcome to Mind Diary
      </h1>

      <div>
        <p className="welcome-paragraph">
          Which Zen space would you like to visit today?
        </p>
          <Link className="welcome-button" to="/journals"> My Journals</Link>

          <Link className="welcome-button" to="/prescriptions">My Prescriptions</Link>
      </div>

    </div>

  )
}
export default UserIndexContainer
