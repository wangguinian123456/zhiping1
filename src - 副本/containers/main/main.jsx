
import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import { List, InputItem, WingBlank, WhiteSpace, Radio, Button } from 'antd-mobile';
import { connect } from 'react-redux'
import { mains } from '../../redux/actions'
import { Redirect } from 'react-router-dom'


import Logo from '../../compnents/logo/logo'
// import register from '../register/register';

class main extends Component {
  // 初始化状态数据
  state = {
    username: '',
    password: '',
    password1: '',
    msg: '',
    type: 'dashen'
  }
  //收集表单数据
  handlerChange = (name, val) => {
    // console.log(name);
    // console.log(val);
    // 更新状态数据
    this.setState({ [name]: val })
  }
  login = () => {
    this.props.history.push('/login')
  }
  //执行注册函数
  mains = () => {
    // console.log(this.state);
    //调用注册方法
    this.props.mains(this.state)
  }
  render() {
    console.log(this.props.user);
    // /获取状态数据中的redirectTo
    const { redirectTo, msg } = this.props.user;
    //判断redirectTo有值 表示注册是ok的
    if (redirectTo) {
      return <Redirect to={redirectTo} />
    }
    return (
      <div>
        <NavBar>
          注册
        </NavBar>
        <Logo />
        <WingBlank>
          <List>
            {msg ? <div className='error-msg'>{msg}</div> : null}
            <WhiteSpace size="sm" />
            <InputItem placeholder='请输入用户名' type='text' onChange={val => this.handlerChange('username', val)}>
              用户名：
            </InputItem>
            <WhiteSpace size="sm" />
            <InputItem placeholder='请设置密码' type='password' onChange={val => this.handlerChange('password', val)}>
              密&nbsp;&nbsp;&nbsp;码：
            </InputItem>
            <WhiteSpace size="sm" />
            <InputItem placeholder='请确认密码' type='password' onChange={val => this.handlerChange('password1', val)}>
              确认密码：
            </InputItem>
            <WhiteSpace size="sm" />
            <List.Item>
              <span>用户类型：</span>
              <Radio checked={this.state.type === "dashen"} onClick={() => this.handlerChange('type', "dashen")}>大神</Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={this.state.type === "laoban"} onClick={() => this.handlerChange('type', "laoban")}>老板</Radio>
            </List.Item>
            <WhiteSpace size="xl" />
            <Button type='primary' onClick={this.mains}>注册</Button>
            <Button onClick={this.login}>已注册</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
export default connect(
  state => ({ user: state.user }),
  { mains }
)(main)