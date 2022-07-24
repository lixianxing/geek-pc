import { Layout, Menu, Popconfirm, Button } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'

const { Header, Sider } = Layout

function GeekLayout() {
  const { pathname } = useLocation()
  const { userStore, loginStore } = useStore()
  const navigate = useNavigate()
  const [menuList ] = useState(() => {
    return [
      {
        key: '/',
        label: '数据概览',
        icon: <HomeOutlined />
      },
      {
        key: '/article',
        label: '内容管理',
        icon: <DiffOutlined />
      },
      {
        key: '/publish',
        label: '发布文章',
        icon: <EditOutlined />
      }
    ]
  })
  useEffect(() => {
    try {
      userStore.getUserInfo()
    } catch { }
  }, [userStore])
  // menu事件
  const onClick = (key) => {
    navigate(key.key)
  }

  // 退出登入
  const onLogout = () => {
    loginStore.loginOut()
    navigate('/login')
  }
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.name}</span>
          <span className="user-logout">
            <LogoutOutlined />

            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onLogout}>
              <Button type="text" style={{ color: "#fff", padding: 0 }} >
                退出
              </Button>
            </Popconfirm>

          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[pathname]}
            style={{ height: '100%', borderRight: 0 }}
            items={menuList}
            onClick={onClick}
          >

          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default observer(GeekLayout)  