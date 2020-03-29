import React from 'react';
import {Row, Col,Typography, Card} from 'antd';
import {BookFilled} from '@ant-design/icons';

import './style.css';
import json from '../resume.json';

export default function Education(){
  const {Title} = Typography;
  const {label_ch,label_en} = json.heads.education; 

  let row = (edu) => {
    return (
      <Card style={{border:'none'}} className="innerCard_padding_small">
        <Row justify="start" style={{textAlign:'left'}}>
          <div className="decoCircle"></div>
          <h5 className="ft-13 txt-deep-color" style={{fontWeight:600,display:'inline-block'}}>{edu.info.uni}</h5>
        </Row>
        <Row justify="start" style={{textAlign:'left'}}>
          <span className="ft-13 txt-deep-color">{edu.info.major}</span>
        </Row>
        <Row justify="start" style={{textAlign:'left'}}>
          <span className="ft-13 txt-deep-color">GPA：{edu.info.gpa}</span>
        </Row>
        <Row justify="start" style={{textAlign:'left',marginBottom:8}}>
          <span className="ft-13 txt-deep-color">{edu.info.period}</span>
        </Row>
        {edu.intro.map((i)=> (<Row justify="start" style={{textAlign:'left'}} className="txt-deep-color">{i}</Row>))}
      </Card>
    )
  }
  return (
    <Card style={{border:'none'}} className="innerCard_padding_small innerCard_padding_zero_bottom">
      <Row justify="center">
        <BookFilled style={{fontSize:22,color:'#dbb6b0',marginRight:6}}/>
        <Title level={4} style={{fontSize:'16px',color:'#dbb6b0'}} >
          {label_ch}&nbsp;{label_en}
        </Title>
      </Row>
      {row(json.education.aucklandUni)}
      {row(json.education.xmu)}
    </Card>
  )
}