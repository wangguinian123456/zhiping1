import { AUCCESS_AUTH, AUCCESS_ERROR } from '../redux/action-types'
//注册同步动作=》注册成功的动作
// 注册的数据user
export const aucccessauth = (user) => ({
    type: AUCCESS_AUTH,
    data: user
})
//同步动作=》注册失败的动作
// 注册失败的信息msg
export const auccesserror = (msg) => ({
    type: AUCCESS_ERROR,
    data: msg
})

//异步注册=》返回的是函数
// user就是注册的数据
export const mains = (user) => {
    const { username, password, password1, type } = user;
    // 注册成功模拟
    let res = false;//true注册成功 false 注册失败
    return (dispatch) => {
        setTimeout(() => {
            if (res) {
                //注册ok
                dispatch(aucccessauth({username,type}))
            }else{
                //注册失败
                dispatch(auccesserror("注册失败"))
            }
        }, 2000)

    }
}


