import React, {useState,useEffect} from 'react';
import {Row, Col,Avatar,Typography} from 'antd';

import './style.css';

import json from '../resume.json';

export default function sectionHead(){
  const {Title} = Typography;

  const {label_ch,label_en} = json.heads.work;

  return (
    <Row className="sectionHead" align="middle">
      <Col span={4} offset={4} className="sectionHead-first">
        <div className="decoLine"></div>
      </Col>
      <Col span={8} style={{}}>
        <Title level={4} style={{backgroundColor:'#e1ccc9',padding:'10px',color:'#fff',marginBottom:'0',fontSize:'16px'}}>{label_ch}&nbsp;{label_en}</Title>
      </Col>
      <Col span={4}>
        <div className="decoLine"></div>
      </Col>
    </Row>
  )
}