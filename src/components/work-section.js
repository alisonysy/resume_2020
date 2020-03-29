import React from 'react';
import {Row, Col,Typography, Card} from 'antd';

import './style.css';
import SectionHead from './section-head';
import json from '../resume.json';
import {handleRawBoldTag} from '../utils/handleJson';

function Experience(props){
  const {Title} = Typography;
  const {exp} = props;
  const style_head = {
    color:'#715353'
  }
  return (
    <Card style={{width:'100%',border:'none'}} className="innerCard_padding_small">
      <Row >
        <Col span={8}>
          <div className="decoCircle"></div>
          <h5 className="ft-13 txt-deep-color" style={{fontWeight:600,display:'inline-block'}}>{exp.company}</h5>
        </Col>
        <Col span={8}><h5 className="ft-13 txt-deep-color">{exp.position}</h5></Col>
        <Col span={8}><h5 className="ft-13 txt-deep-color">{exp.from}-{exp.to}</h5></Col>
      </Row>
      <Row>
        <h5 className="ft-13 txt-deep-color" style={{color:'#dbb6b0'}}>{exp.intro}</h5>
      </Row>
      {exp.responsibility.map((r)=>{
        return (
          <Row className="ft-13 txt-deep-color" style={{textAlign:'left'}}>{handleRawBoldTag(r)}</Row>
        )
      })}
    </Card>
  )
}

export default function Work(){
  const {work} = json.heads.work;
  return (
    <Card style={{border:'none'}} className="innerCard_padding_medium">
      <SectionHead head="work"/>
      {json.work.map((w)=>{
        return (<Experience exp={w} />)
      })}
    </Card>
  )
}