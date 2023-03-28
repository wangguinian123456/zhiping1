import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';

import Logo from '../../compnents/logo/logo'

export default class login extends Component {
  //状态数据
  state={
    username:"", 
    password:""
  }
  // 收集表单数据
  handlerChange(name,val){
    // 更新状态机数据
    this.setState({[name]:val})
  }
  //执行注册函数
  login=()=>{
    console.log(this.state);
  }
  register= ()=>{
    // 跳转到登录界面
    this.props.history.push('/register')
  }
  render() {
   
    return (
      <div>
        <NavBar>
          登录
        </NavBar>
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace size="sm" />
            <InputItem placeholder='请输入用户名' type='text' onChange={val=>this.handlerChange("username",val)}>
              用户名：
            </InputItem>
            <WhiteSpace size="sm" />
            <InputItem placeholder='请设置密码' type='password'  onChange={val=>this.handlerChange("password",val)}>
              密&nbsp;&nbsp;&nbsp;码：
            </InputItem>
            <WhiteSpace size="xl" />
            <Button type='primary' onClick={this.login}>登录</Button>
            <Button onClick={this.register}>还没有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
