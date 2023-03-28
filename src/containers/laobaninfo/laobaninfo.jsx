import React, { Component } from 'react'
import { List, InputItem, WhiteSpace, Button, NavBar } from 'antd-mobile';
import Headerselector from '../headerselector/headerselector'
export default class laobaninfo extends Component {
    state = {
        post: '',//求职岗位
        info: '',//个人介绍
        header:'',//头像文本
        company:'',
        salary:''
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
                <NavBar>这是老板界面</NavBar>
                <Headerselector setHeader={this.setHeader}/>
                <List><WhiteSpace size="sm" />
                    <InputItem placeholder='请输入招聘岗位' type='text' onChange={(val) => this.handlechange("post", val)}>
                        招聘岗位
                    </InputItem>
                    <WhiteSpace size="sm" />
                    <InputItem placeholder='请输入公司名称' type='text' onChange={(val) => this.handlechange("company", val)}>
                        公司名称
                    </InputItem>
                    <WhiteSpace />
                    <InputItem placeholder='请输入薪资待遇' type='text' onChange={(val) => this.handlechange("salary", val)}>
                        薪资待遇
                    </InputItem>
                    <WhiteSpace />
                    <InputItem placeholder='请输入薪资待遇' type='text' onChange={(val) => this.handlechange("info", val)}>
                        职位介绍
                    </InputItem>
                    <Button type='primary' onClick={this.save}>保存</Button>
                </List>
            </div>
        )
    }
}

