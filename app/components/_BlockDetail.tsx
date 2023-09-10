// let environment = require('../environments/' + ENV);
let environment = require('../environments/development');
//let environment = require('../environments/production');

import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

export interface BlockDetailProps {
  blockDetail: Function,
  blockError: Function,
  uuid: string,
}

const BlockDetail = (props: BlockDetailProps) => {
  const {blockDetail, blockError, uuid} = props,
    [data, setData] = useState(null),
    [error, setError] = useState(false),
    [flag, setFlag] = useState(true)

  const handleBlockDetailOnclick = (e) => {
    e.preventDefault();
    blockDetail();
  }

  const loadData = async () => {
    axios.get(environment.apiEndpoint + 'blocks/' + uuid)
      .then((response) => {
        setFlag(false)
        setData(response.data)
      })
      .catch(e => {
        setError(true)
        if(typeof e.response === 'undefined') {
          blockError('A network error occurred'); 
        } else {
          blockError(e.response); 
        }
      });
    }

  useEffect(() => {
    if(uuid && !error && flag) {
      loadData();
    } 
  });

  if(!error && uuid) { 
    console.log(data)
    if(data) {
      return (
        <div className='blockDetail'>
          <div className='blockDetail__content'>
            <div>Block ID : {data.uuid}</div>
            <div>Block Value : 1 EUR</div>
            <div>Words : <a href={'https://what3words.com/' + data.what3Words}>{data.what3Words}</a></div>             <div>Block ID : {data.uuid}</div>
            <div>Block Value : 1 EUR</div>
            <div>Words : <a href={'https://what3words.com/' + data.what3Words}>{data.what3Words}</a></div>            <div>Block ID : {data.uuid}</div>
            <div>Block Value : 1 EUR</div>
            <div>Words : <a href={'https://what3words.com/' + data.what3Words}>{data.what3Words}</a></div>            <div>Block ID : {data.uuid}</div>
            <div>Block Value : 1 EUR</div>
            <div>Words : <a href={'https://what3words.com/' + data.what3Words}>{data.what3Words}</a></div>            <div>Block ID : {data.uuid}</div>
            <div>Block Value : 1 EUR</div>
            <div>Words : <a href={'https://what3words.com/' + data.what3Words}>{data.what3Words}</a></div>            <div>Block ID : {data.uuid}</div>
          </div>
          <div className='blockDetail__button'>
            <button onClick={handleBlockDetailOnclick}>CLOSE</button>          
          </div>
        </div>
      )
    } else {
      return(
        <React.Fragment />
      )
    } 
  } else {
    return(
      <React.Fragment> 
      </React.Fragment>
    )    
  }
}

export default BlockDetail;
  