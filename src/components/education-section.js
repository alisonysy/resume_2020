import React from 'react';
import {Row, Col,Typography, Card} from 'antd';
import {BookFilled} from '@ant-design/icons';

import './style.css';
import json from '../resume.json';

export default function Education(){
  const {Title} = Typography;
  const {label_ch,label_en} = json.heads.education; 
  const {info,intro} = json.education.aucklandUni;

  let row = () => {
    return (
      <Card style={{border:'none'}} className="innerCard_padding_small">
        <Row justify="start" style={{textAlign:'left'}}>
          <div className="decoCircle"></div>
          <h5 className="ft-13" style={{fontWeight:600,display:'inline-block'}}>{info.uni}</h5>
        </Row>
        <Row justify="start" style={{textAlign:'left'}}>
          <span className="ft-13">{info.major}</span>
        </Row>
        <Row justify="start" style={{textAlign:'left'}}>
          <span className="ft-13">{info.gpa}</span>
        </Row>
        <Row justify="start" style={{textAlign:'left',marginBottom:8}}>
          <span className="ft-13">{info.period}</span>
        </Row>
        {intro.map((i)=> (<Row justify="start" style={{textAlign:'left'}}>{i}</Row>))}
      </Card>
    )
  }
  return (
    <Card style={{border:'none'}} className="innerCard_padding_small">
      <Row justify="center">
        <BookFilled style={{fontSize:22,color:'#dbb6b0',marginRight:6}}/>
        <Title level={4} style={{fontSize:'16px',color:'#dbb6b0'}} >
          {label_ch}&nbsp;{label_en}
        </Title>
      </Row>
      {row()}
    </Card>
  )
}