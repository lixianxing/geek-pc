import { Routes, Route } from 'react-router-dom';
import { HistoryRouter, history} from '@/utils'
// app样式
import './App.css'
// 页面
import { AuthComponent } from '@/components/AuthRoute';
import GeekLayout from './pages/layout'; // 布局
import Login from '@/pages/login'; //登录
import Home from './pages/Home';
import Article from './pages/Article';
import Publish from './pages/Publish';


function App() {
  return (
    // 路由配置

    <HistoryRouter history={history}>
      <div className='App'>
        <Routes>
          {/* 创建路由path和组件对应关系 */}
          <Route path='/' element={
            <AuthComponent>
              <GeekLayout />
            </AuthComponent>}>
            <Route index element={<Home />}></Route>
            <Route path='/article' element={<Article />}></Route>
            <Route path='/publish' element={<Publish />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>

      </div>
    </HistoryRouter>
  );
}

export default App;
