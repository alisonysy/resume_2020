import React from 'react';
import {Row, Col, Card} from 'antd';

import './style.css';
import json from '../resume.json';
import SectionHead from './section-head';

function ProjectCard(props){
  const {name,link,description,technique} = props.info;
  return (
    <Card  style={{border:'none'}} className="innerCard_padding_small">
      <Row>
        <Col span={6} className="ft-13">
          <div style={{marginBottom:6}} className="fw-800 txt-deep-color">{name}</div>
          {link.map((l,idx)=>{
            let k = 'project-link'+idx;
            return (<div style={{marginBottom:6}} key={k}><a href={l[1]} style={{color:'#dbb6b0'}} target="_blank">{l[0]}</a></div>);
          })}
        </Col>
        <Col span={17} className="ft-13" style={{textAlign:'left'}}>
          <div style={{marginBottom:7}} className="txt-deep-color"><span className="fw-800">描述：</span>{description}</div>
          <div className="txt-deep-color"><span className="fw-800">实现技术：</span>{technique.reduce((prev,cur)=> (prev+" + "+cur))}</div>
        </Col>
      </Row>
    </Card>
  )
}

export default function Projects(){
  return (
    <Card style={{border:'none'}} className="innerCard_padding_medium">
      <SectionHead head="projects" />
      <ProjectCard info={json.projects.ipitaka} />
      <ProjectCard info={json.projects.cnode} />
      <ProjectCard info={json.projects.mockup163} />
    </Card>

  )
}