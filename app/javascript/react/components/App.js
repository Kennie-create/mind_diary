import React from 'react'
import { Route, Switch, BrowserRouter} from "react-router-dom"

import JournalContainer from './JournalContainer'

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/journals" component={JournalContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
