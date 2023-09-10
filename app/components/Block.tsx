import * as React from 'react';
import { useState, useEffect } from 'react';


export interface BlockProps {
  endAllocation: boolean;
  opacity: number
  startAllocation: boolean;
  beginAllocation: number;
}

const Block = (props: BlockProps) => {
    const {beginAllocation, endAllocation, opacity, startAllocation,} = props;
    const opacityClass = opacity

  // const {allocated, blockDetail, complete, detail, opacity, uuid} = props,
  //   [blockData, setBlockData] = useState({ allocated : false, completed : false, invoiceCurrency : '', invoiceValue : 0,  what3Words : '', uuid : ''});    
  //     let usage = "block notAllocatedOrCompleted"
  //     if(allocated) {
  //       usage = 'block allocatedCompleted'
  //     }
  //     if(allocated && !complete) {
  //       usage = 'block notCompleted'
  //     }

  // const handleBlockOnclick = (e) => {
  //   if(allocated) {
  //     e.preventDefault();
  //     blockDetail(uuid);
  //   }
  // }  
  //endallocation true
  return (

    <div className={!endAllocation && !startAllocation  ? 
      `bg-block-green w-4 h-4 m-2 opacity-${opacityClass}`
      : 
        startAllocation ? 
        `bg-block-gold w-4 h-4 m-2 opacity-${opacityClass}`
        : 
          `bg-block-grey w-4 h-4 m-2 opacity-${opacityClass}` 
      }>
    </div>
  )
}

export default Block;