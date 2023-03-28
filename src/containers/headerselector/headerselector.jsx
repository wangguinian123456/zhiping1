import React, { Component } from 'react'
import { Grid, List } from 'antd-mobile';
export default class headerselector extends Component {
  constructor() {
    super();
    // 初始化状态数据
    this.state = {
      icon: null
    }
    // 定义头像存储的数组
    this.headlist = []
    //遍历头像
    for (let i = 0; i < 20; i++) {
      this.headlist.push({
        text: "头像" + (i + 1),//头像文本
        icon: require(`../../assets/images/头像${i + 1}.png`)
      })
    }
  }
  //选择头像
  handleClick = ({ text, icon }) => {
    // 更新状态机数据
    this.setState({icon:icon})
    //传递的头像数据
    this.props.setHeader(text)

  }
  render() {
    const icon= this.state.icon;
    const selectheader = !icon?"请选择头像":
    (<div>
      已选择头像:<img src={icon} alt=''/>
    </div>)
    return (
      <div>
        <List renderHeader={() => selectheader}>
          <Grid data={this.headlist} columnNum={5} onClick={this.handleClick}></Grid>
        </List>

      </div>
    )
  }
}
