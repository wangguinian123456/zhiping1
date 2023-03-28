// 函数  注册和登录跳转的完善
// 注册或登录完后，如果是大神和老板直接跳转大神或者老板界面
export function getRedirectTo (type){
    let path
    if (type==='dashen') {
        path='/dasheninfo'
    }
    if (type==='laoban') {
        path='/laobaninfo'
    }
    return path
}