import * as React from 'react';
import { Button, Icon } from 'semantic-ui-react';


export interface ErrorProps {
error: boolean,
errorMessage: string,
}

const Error = (props: ErrorProps) => {
  const {error, errorMessage} = props

  if(error) { 
    return (
      <div className='error'>
        <div className='error__icon'></div>
        <div className='error__error'>ERROR</div>
        <div className='error__message'>{errorMessage}</div>
        <Button onClick={() =>window.location.reload()} className='error__retry'>RELOAD</Button>
      </div>
    )
  } else {
    return (
      <React.Fragment />
    );
  }
}

export default Error;