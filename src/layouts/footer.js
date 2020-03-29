import React from 'react';
import {Row} from 'antd';

import './style.css';

export default function Footer(){

  return (
    <Row style={{padding:'10px 0',backgroundColor:'#e1ccc9',textAlign:'center'}} className="ft-13" justify="center">
      Copyright {new Date().getFullYear()}. 本简历制作源码: https://github.com/alisonysy/resume_2020. All Rights Reserved.
    </Row>
  )
}