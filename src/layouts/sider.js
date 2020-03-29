import React from 'react';
import {Row, Col,Typography, Card} from 'antd';
import {UserOutlined,WomanOutlined,MobileOutlined ,MailOutlined} from '@ant-design/icons';

import './style.css';
import json from '../resume.json';
import SectionHead from '../components/section-head';
import Education from '../components/education-section';

function InfoRow(props){
  return (
    <Row className="ft-13 decoLine_bottom" justify="space-between" style={{marginBottom:8}}>
      {props.info}
      {props.children}
    </Row>
  )
}

function Basics(props){
  const {birth,gender,mobile,email} = json.basics;
  const style_icon = {
    fontSize:20,
    color:'#dbb6b0'
  }
  return (
    <Card style={{border:'none'}} className="innerCard_padding_small">
      <InfoRow info={birth}>
        <UserOutlined style={style_icon}/>
      </InfoRow>
      <InfoRow info={gender}>
        <WomanOutlined style={style_icon}/>
      </InfoRow>
      <InfoRow info={mobile}>
        <MobileOutlined style={style_icon}/>
      </InfoRow>
      <InfoRow info={email}>
        <MailOutlined style={style_icon}/>
      </InfoRow>
    </Card>
  )
}

export default function(){
  return (
    <Card style={{border:'none'}} className="innerCard_padding_medium">
      <Basics />
      <Education/>
    </Card>
  )
}