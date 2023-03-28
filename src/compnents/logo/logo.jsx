import React, { Component } from 'react'
import Logo from './logo.png'
import '../logo/logo.css'
export default class logos extends Component {
  render() {
    return (
      <div className='logo-container'>
        <img src={Logo} alt="Logo" className='logo-img'/>
      </div>
    )
  }
}



// import React, { Component } from 'react'
// import {  NavBar } from 'antd-mobile';
// import { List, InputItem,WingBlank, WhiteSpace,Button } from 'antd-mobile';

// import Logo from '../../compnents/logo/logo'

// export default class main extends Component {
//   render() {
//     return (
//       <div>
//         <NavBar>
//             登录
//         </NavBar>
//         <Logo/>
//         <WingBlank>
//         <List>
//         <WhiteSpace size="sm" />
//         <InputItem placeholder='请输入用户名' type='text'>
//         用户名：
//         </InputItem>
//         <WhiteSpace size="sm" />
//         <InputItem placeholder='请设置密码' type='password'>
//         密&nbsp;&nbsp;&nbsp;码：
//         </InputItem>
//         <WhiteSpace size="sm" />
//         <Button type='primary'>登录</Button>
//         </List>
//         </WingBlank>
//       </div>
//     )
//   }
// }
