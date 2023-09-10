
import * as React from 'react';
import { useState, useEffect } from 'react';
import Block from './_Block';
import BlockDetail from './_BlockDetail';
import Error from './_Error';
import More from './_More';


interface block {
  allocated : boolean,
  complete : boolean,
  uuid : string,
}

export interface ContractProps {
  blocks : block [],
  blocksTotal : number,
  blocksAllocated : number,
  clientName : string,
  clientUrl : string,
  clientLogo : string,
  clientText : string,
  contractError : boolean,
  contractErrorMessage : string,
  uuid : string
}

const Contract = (props: ContractProps) => {
  const {blocks, blocksAllocated, blocksTotal, clientLogo, clientName, clientText, clientUrl, contractError, contractErrorMessage, uuid} = props,
  [blockDetailUuid, setBlockDetailUuid] = useState(null),
  [displayBlocks, setDisplayBlocks] = useState(100),
  [error, setError] = useState(true),
  [errorMessage, setErrorMessage] = useState(null)

  const blockDetail = ((uuid) => {
    setBlockDetailUuid(uuid);
  });
    
  const blockError = ((blockErrorMessage) => {
    setError(true);
    setErrorMessage(blockErrorMessage);
  });
  
  const displayMore = (() => {
    setDisplayBlocks(0);
  });
  
  const opacity09 = blocksAllocated / 5,
    opacity08 = 2 * ( blocksAllocated / 5),
    opacity07 = 3 * ( blocksAllocated / 5),
    opacity06 = 4 * ( blocksAllocated / 5),
    opacity05 = 5 * ( blocksAllocated / 5);

  useEffect(() => {
    if(window.innerWidth > 768) {
      setDisplayBlocks(350)
    }
    if(window.innerWidth > 1438) {
      setDisplayBlocks(560)
    }
    setError(contractError)
    setErrorMessage(contractErrorMessage)
  }, [])

  return (
    <React.Fragment>
      <div className='height'>
        <div className='contract'>
          <Error error={error} errorMessage={errorMessage}/>
          <BlockDetail blockDetail={blockDetail} blockError={blockError} uuid={blockDetailUuid} />
            {
              blocks.map((block, index) => {
                if (displayBlocks === 0 || index < (displayBlocks)) {
                  let detail = false;
                  if(block.uuid === blockDetailUuid) {
                    detail = true;
                  }
                  let opacity = 0.1;
                  if (index > opacity09) {
                    opacity = 0.9;
                  }
                  if (index > opacity08) {
                    opacity = 0.8;
                  }
                  if (index > opacity07) {
                    opacity = 0.7;
                  }
                  if (index > opacity06) {
                    opacity = 0.6;
                  }
                  if (index > opacity05) {
                    opacity = 0.5;
                  }
                  if (index > blocksAllocated) {
                    opacity = 0.1;
                  }
                  return (
                    <Block key={block.uuid} allocated={block.allocated} blockDetail={blockDetail} complete={block.complete} detail={detail} opacity={opacity} uuid={block.uuid} />
                  )
                }
            })}
            <More displayBlocks={displayBlocks} displayMore={displayMore} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contract;