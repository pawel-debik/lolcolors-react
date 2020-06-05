import React from 'react';

const Statusbar = function(props){
	return(
		<div className = "bar">
			<p 
				id = "instructions" 
				className = "instructions">
				{props.description}
			</p>
			<div className = "words" id="words"></div>
		</div>
	);
}

export default Statusbar;