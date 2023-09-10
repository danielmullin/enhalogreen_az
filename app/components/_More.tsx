import * as React from 'react';
import { Button } from 'semantic-ui-react';


export interface MoreProps {
  displayBlocks: number,
  displayMore: Function,
}

const More = (props: MoreProps) => {
  const {displayBlocks, displayMore} = props

  const handleOnclick = (e) => {
    e.preventDefault();
    displayMore();
  }

  if(displayBlocks > 0) { 
    return (
      <div onClick={handleOnclick} className="more" >
      </div>
    )
  } else {
    return(
      <React.Fragment />
    )
  }
}

export default More;