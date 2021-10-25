// 进行local数据管理的工具模块
import store from 'store'
const USER_KEY = 'user_key';

export default {
    // 保存user
    saveUser(user){
        store.set(USER_KEY, user)
    },
    // 读取user
    getUser(){
        return store.get(USER_KEY) || {}
    },
    removeUser(){
        store.remove(USER_KEY)
    }
}