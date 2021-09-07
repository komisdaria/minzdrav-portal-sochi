import React from 'react'
import { Route, Switch } from 'react-router-dom'


export default function Main() {
  return (
    <div>
           <Switch>
            <Route exact path='/'><Main/></Route>
            <Route exact path='/login'>Login</Route>
            <Route exact path='/registration'>Registration</Route>
          </Switch>
    </div>
  )
}
