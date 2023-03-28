//导入合并reducers 函数 combineReducers
import { combineReducers } from "redux";
import {getRedirectTo} from '.././utils/index'
//reducers 模块=》写函数  1.初始化状态数据 
const state1={
    username:'',//注册的用户名
    type:'',//注册的类型
    msg:'',//注册失败的原因
    redirectTo:'',//注册成功的这时候 跳转的路由路径
}
function user(state= state1,action){

switch(action.type){
    //注册成功
    case "aucccessauth":
        //获取用户类型
        let type=action.data.type
        return {...action.data,redirectTo:getRedirectTo(type)}
        // 注册失败
        case  "auccesserror":
            return   {...state,msg:action.data}
            //默认操作
            default :
            return state

}
}
//把reducers 的多个函数开放出去
export default combineReducers({
    user
})