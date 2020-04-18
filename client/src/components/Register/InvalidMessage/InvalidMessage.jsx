import React from 'react';
import './InvalidMessage.css'
import { VALID_MESSAGE } from '../../../constants';
const InvalidMessage = ({message}) => {

    return ( 
        <div className="invalid-message-containe">
            <p className={`message ${message === VALID_MESSAGE ? 'valid' : null}`}>{message}</p>
        </div>
     );
}
 
export default InvalidMessage;