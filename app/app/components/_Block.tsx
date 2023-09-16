import axios from 'axios'
import * as React from 'react';
import { useState, useEffect } from 'react';


export interface BlockProps {
  allocated: boolean,
  blockDetail: Function,
  complete: boolean,
  detail: boolean,
  opacity: number,
  uuid: string
}

const Block = (props: BlockProps) => {
  const {allocated, blockDetail, complete, detail, opacity, uuid} = props,
    [blockData, setBlockData] = useState({ allocated : false, completed : false, invoiceCurrency : '', invoiceValue : 0,  what3Words : '', uuid : ''});    
      let usage = "block notAllocatedOrCompleted"
      if(allocated) {
        usage = 'block allocatedCompleted'
      }
      if(allocated && !complete) {
        usage = 'block notCompleted'
      }

  const handleBlockOnclick = (e) => {
    if(allocated) {
      e.preventDefault();
      blockDetail(uuid);
    }
  }
  
  return (
    <div className={usage + ' opacity-' + 10 * opacity} onClick={handleBlockOnclick}></div>
  )
}

export default Block;