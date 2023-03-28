import {BrowserRouter,Switch,Route} from 'react-router-dom'
// import {Switch,Route} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from '../src/App'
// 引入整体 css
import 'antd-mobile/dist/antd-mobile.css'
import './assets/css/index.css'
//导入组件
import register from './containers/register/register';
import login from './containers/login/login';
import main from './containers/main/main';
//引入provider
import {Provider} from 'react-redux'
//引入store 
import store from '../src/redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
  <BrowserRouter>
  <Switch>
    <Route path="/register" component={register}/>
    <Route path="/login" component={login}/>
    <Route path="/" component={main}/>
  </Switch>
  </BrowserRouter>
  </Provider>
);




