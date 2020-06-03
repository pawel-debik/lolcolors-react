import React, {useState} from 'react';
import './interface.css';

const Interface = function(props){

	const [buttonLabel, setButtonLabel] = useState('Start');


	return(
		<div className="controls">
			<button onClick={props.doSomething} className="primary-button" id="start-button">{props.status}</button>
		</div>
	);
}

export default Interface;