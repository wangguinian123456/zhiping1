import React, { Component } from 'react'
import { List, InputItem, WhiteSpace, Button, NavBar } from 'antd-mobile';
import Headerselector from '../headerselector/headerselector'
export default class dasheninfo extends Component {
    state = {
        post: '',//求职岗位
        info: '',//个人介绍
        header:''//头像文本
    }
    // 收集表单数据
    handlechange = (name, value) => {
        this.setState({[name] : value})
    }
    //保存数据
    save = () => {
        console.log(this.state);
    }
    setHeader=(header)=>{
this.setState({header:header})
    }
    render() {
        return (
            <div>
                <NavBar>这是大神界面</NavBar>
                <Headerselector setHeader={this.setHeader}/>
                <List><WhiteSpace size="sm" />
                    <InputItem placeholder='请输入求职岗位' type='text' onChange={(val) => this.handlechange("post", val)}>
                        求职岗位
                    </InputItem>
                    <WhiteSpace size="sm" />
                    <InputItem placeholder='请输入个人介绍' type='text' onChange={(val) => this.handlechange("info", val)}>
                        个人介绍
                    </InputItem>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.save}>保存</Button>
                </List>
            </div>
        )
    }
}
