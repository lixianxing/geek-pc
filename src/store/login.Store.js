import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'
class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }

  getToken = async ({ mobile, code }) => {
    // 调登入接口
    let res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })

    // 存入token
    this.token = res.data.token

  }
}

export default LoginStore