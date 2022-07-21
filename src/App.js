import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Login from '@/pages/login';
import { AuthComponent } from '@/components/AuthRoute';

function App() {
  return (
    // 路由配置
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* 创建路由path和组件对应关系 */}
          <Route path='/' element={
            <AuthComponent>
              <Layout />
            </AuthComponent>
          }></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
