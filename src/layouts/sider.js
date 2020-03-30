import React from 'react';
import {Row, Card} from 'antd';
import {UserOutlined,WomanOutlined,MobileOutlined ,MailOutlined,HomeOutlined,GithubOutlined} from '@ant-design/icons';

import './style.css';
import json from '../resume.json';
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
  const {birth,gender,mobile,email,website,github} = json.basics;
  const style_icon = {
    fontSize:20,
    color:'#dbb6b0',
    marginBottom:5
  }
  return (
    <Card style={{border:'none',marginBottom:10}} className="innerCard_padding_small">
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
      <InfoRow info={website}>
        <HomeOutlined style={style_icon}/>
      </InfoRow>
      <InfoRow info={github}>
        <GithubOutlined style={style_icon}/>
      </InfoRow>
    </Card>
  )
}

export default function(){
  return (
    <Card style={{border:'none'}} className="innerCard_padding_medium innerCard_padding_zero_bottom">
      <Basics />
      <Education/>
    </Card>
  )
}