import React from 'react';
import {Row, Col,Typography, Card} from 'antd';

import './style.css';
import SectionHead from './section-head';
import json from '../resume.json';

function handleRawTag(r){
  let boldRegExp = /(<bold>)(.+?)(<\/bold>)/;
  let modified_r = r,re,indexes={},order=0;
  while(boldRegExp.exec(modified_r)){
    let boldRe = boldRegExp.exec(modified_r);
    let [all,,content] = boldRe;
    let start_index = boldRe.index, input = boldRe.input;
    let first = input.substring(0,start_index), last = input.substring(input.indexOf(all)+all.length);
    re = (<span>{first}<span className="fw-800">{content}</span>{last}</span>);
    modified_r = first+content+last;
    let temp = modified_r.split(content);
    indexes[modified_r.indexOf(content)] = [order++,content,temp[0]+content];
    modified_r = temp[1]
  };
  let parts = [];
  for(let [k,v] of Object.entries(indexes)){
    parts[v[0]] = (<span>{v[2].substring(0,k)}<span className="fw-800">{v[1]}</span></span>);
  }
  if(parts.length){
    return (
      parts.map((i)=>{
        return i;
      })
    )
  }
  return r;
}

function Experience(props){
  const {Title} = Typography;
  const {exp} = props;

  const style_head = {
    color:'#715353'
  }


  return (
    <Card style={{width:'100%',border:'none'}}>
      <Row>
        <Col span={8}>
          <div className="decoCircle"></div>
          <h5 className="ft-14" style={{fontWeight:600,display:'inline-block'}}>{exp.company}</h5>
        </Col>
        <Col span={8}><h5 className="ft-14">{exp.position}</h5></Col>
        <Col span={8}><h5 className="ft-14">{exp.from}-{exp.to}</h5></Col>
      </Row>
      <Row>
        <h5 className="ft-14" style={{color:'#dbb6b0'}}>{exp.intro}</h5>
      </Row>
      {exp.responsibility.map((r)=>{
        return (
          <Row className="ft-14">{handleRawTag(r)}</Row>
        )
      })}
    </Card>
  )
}

export default function Work(){
  return (
    <Card style={{border:'none'}}>
      <SectionHead />
      {json.work.map((w)=>{
        return (<Experience exp={w} />)
      })}
    </Card>
  )
}