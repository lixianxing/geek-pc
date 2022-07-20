import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import './index.scss'
import logo from '@/assets/logo.png'
import { useStore } from '@/store/index'
import { useNavigate } from 'react-router-dom'


function Login() {
  const { loginStore } = useStore()
  const navigate = useNavigate()
  // 提交表单
  const onFinish = async (values) => {
    let { code, mobile } = values
    // 登入
    try {
      await loginStore.getToken({ code, mobile })
      // 跳转
      navigate('/')
      // 消息提示
      message.success('登入成功')
    } catch(e) {
      message.error(e?.message || '登入失败')
    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login'>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt="" />
        {/* 表单样式 */}
        <Form
          initialValues={{
            mobile: '13911111111',
            code: '246810',
            remember: true
          }}
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >

          <Form.Item
            name="mobile"
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号码格式不对',
                validateTrigger: 'onBlur'
              },
              {
                required: true,
                message: '请输入手机号'
              }
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item
            name="code"
            rules={[
              { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
              { required: true, message: '请输入验证码' }
            ]}
          >
            <Input size="large" placeholder="请输入验证码" maxLength={6} />
          </Form.Item>

          <Form.Item  name="remember" valuePropName='checked'
          >
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </div>
  )
}

export default Login