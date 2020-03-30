import React from 'react';

export const handleRawBoldTag = (r) => {
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
    parts[v[0]] = (<span key={k}>{v[2].substring(0,k)}<span className="fw-800">{v[1]}</span></span>);
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