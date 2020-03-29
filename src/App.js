import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import Header from './layouts/header';
import Work from './components/work-section';

function App() {
  return (
    <div className="App">
      <Header />
      <Work />
    </div>
  );
}

export default App;
