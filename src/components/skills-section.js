import React from 'react';
import {Row, Col,Typography, Card,Avatar} from 'antd';

import './style.css';
import json from '../resume.json';
import SectionHead from './section-head';
import {handleRawBoldTag} from '../utils/handleJson';

const images = [
  ["https://reactjs.org/logo-180x180.png","https://vuejs.org/images/logo.png"],
  ["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=653163409,3396683866&fm=15&gp=0.jpg","https://jquery.com/jquery-wp-content/themes/jquery.com/i/favicon.ico"],
  ["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=397609215,2456802838&fm=15&gp=0.jpg"],
  ["https://reactjs.org/logo-180x180.png"],
  ["https://www.webpackjs.com/assets/favicon.ico"]
]

export default function Skills(){
  return (
    <Card style={{border:'none',paddingBottom:0}} className="innerCard_padding_medium">
      <SectionHead head="skills"/>
      <Card style={{border:'none'}} className="innerCard_padding_small">
      {json.skills.map((s,idx)=>{
        return (
          <Row className="ft-13 txt-deep-color" style={{textAlign:'left',marginBottom:6}} align="middle" key={'skills'+idx}>
            <Col span={3} offset={1}>
              {images[idx].map((img,idx)=>{
                let k = 'skills-avatar'+idx;
                return (<Avatar src={img} size={20} style={{marginRight:8}} key={k}></Avatar>)
              })}
            </Col>
            <Col span={20} className="txt-deep-color">
              {handleRawBoldTag(s)}
            </Col>
          </Row>
        )
      })}
      </Card>
    </Card>
  )
}