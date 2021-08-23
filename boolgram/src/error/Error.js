import React from 'react';
import './Error.css';

function Error(props) {
    return <div className="Error"><span className="Error-message">{props.message}</span></div>;
}

export default Error;
