import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';

import Header from './layouts/header';
import Work from './components/work-section';
import InnerSider from './layouts/sider';

function App() {
  const {Content,Sider} = Layout;
  return (
    <div className="App">
      <Header />
      <Layout>
        <Layout>
          <Content >
            <Work />
          </Content>
        </Layout>
        <Sider width='30%'>
          <InnerSider />
        </Sider>
      </Layout>
    </div>
  );
}

export default App;
