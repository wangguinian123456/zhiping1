
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import dasheninfo from '../dasheninfo/dasheninfo';
import laobaninfo from '../laobaninfo/laobaninfo';

export default class register extends Component {
  render() {
    return (
      <div>
        <Route path="/dasheninfo" component={dasheninfo}/>
        <Route path="/laobaninfo" component={laobaninfo}/>
      </div>
    )
  }
}