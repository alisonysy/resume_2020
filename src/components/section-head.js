import React, {useState,useEffect} from 'react';
import {Row, Col,Avatar,Typography} from 'antd';

import './style.css';

import json from '../resume.json';

export default function sectionHead(props){
  const {Title} = Typography;
  const {label_ch,label_en} = json.heads[props.head];

  return (
    <Row className="sectionHead" align="middle">
      <Col span={props.full?6 :4} offset={props.full?0:4} className="sectionHead-first">
        <div className="decoLine"></div>
      </Col>
      <Col span={props.full?12:8} style={{}}>
        <Title level={4} style={{backgroundColor:'#e1ccc9',padding:'10px',color:'#fff',marginBottom:'0',fontSize:'16px'}}>{label_ch}&nbsp;{label_en}</Title>
      </Col>
      <Col span={props.full?6:4}>
        <div className="decoLine"></div>
      </Col>
    </Row>
  )
}