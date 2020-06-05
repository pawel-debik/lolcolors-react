import React, {useState} from 'react';
import './interface.css';

const Interface = function(props){

	let buttonState = false;

	if ( props.status == 'Game running' ) {
		buttonState = true;
	}

	return(
		<div className="controls">
			<button 
				onClick={props.doSomething} 
				className="primary-button" 
				disabled={buttonState}
				id="start-button"> {props.status} </button>
		</div>
	);
}

export default Interface;