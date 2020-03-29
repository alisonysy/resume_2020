import React, {useState,useEffect} from 'react';
import {Row, Col,Avatar,Typography} from 'antd';

import './style.css';

export default function Header(){
  const {Title} = Typography;
  return (
    <Row style={{backgroundColor:'#e1ccc9',padding:'20px 0'}} align="middle" className="pageHead">
      <Col span={8} offset={4}>
        <Title style={{color:'#715353',backgroundColor:'#eee',lineHeight:1.5,border:'2px solid #dbb6b0',padding:'10px',letterSpacing:20}}>翁倩怡</Title>
      </Col>
      <Col span={3} >
        <div className="decoLine"></div>
      </Col>
      <Col span={5} style={{textAlign:'left'}}>
        <Avatar 
          src="https://alisonysy.github.io/alison_resume/src/img/profilePic.jpg" 
          size={120} 
          style={{border:'8px solid #dbb6b0'}}
        />
      </Col>
    </Row>
  )
}