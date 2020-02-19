import React from 'react'
import { Route, Switch, BrowserRouter} from "react-router-dom"

import JournalContainer from './JournalContainer'
import PrescriptionContainer from './PrescriptionContainer'

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/journals" component={JournalContainer} />
        <Route exact path="/prescriptions" component={PrescriptionContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
