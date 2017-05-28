import React from 'react';
import './Message.css';

const Message = props => (
	<div className="Message">{props.children}</div>
);

export default Message;
