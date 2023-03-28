//导入支持异步插件thunk
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//导入创建store对象的方法 
// applyMiddleware =>应用插件
import {createStore,applyMiddleware} from 'redux'
//导入reducers模块=》reducers变量包含了多个reducers函数
import reducers from './reducers'
//创建store
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))