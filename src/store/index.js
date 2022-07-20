import React from 'react'
import LoginStore from './login.Store'
class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
  }
}

// 导入useStore方法供组件使用数据
const StoresContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoresContext)