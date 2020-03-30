import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';

import Header from './layouts/header';
import Work from './components/work-section';
import Skills from './components/skills-section';
import Projects from './components/projects-section';
import InnerSider from './layouts/sider';
import Footer from './layouts/footer';

function App() {
  const {Content,Sider} = Layout;
  return (
    <div className="App">
      <Header />
      <Layout style={{backgroundColor:'transparent',position:'relative'}}>
        <Layout style={{backgroundColor:'transparent'}}>
          <Content >
            <Work />
            <Skills />
          </Content>
        </Layout>
        <Sider 
          width={300}
          style={{backgroundColor:'transparent',minWidth:250}}
          breakpoint="md"
          collapsedWidth="0"
          theme="light"
          collapsible={true}
          zeroWidthTriggerStyle={{backgroundColor:'rgb(225, 204, 201)',color:'#fff'}}
        >
          <InnerSider />
        </Sider>
      </Layout>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
