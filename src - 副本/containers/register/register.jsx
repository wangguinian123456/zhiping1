import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import dasheninfo from '../dasheninfo/dasheninfo';

export default class register extends Component {
  render() {
    return (
      <div>
        <h2>这是注册界面</h2>
        <Route path="/dasheninfo" component={dasheninfo}/>
      </div>
    )
  }
}
