import React from 'react';

const Statusbar = function(){
	return(
		<div className = "bar">
			<p id = "instructions" className = "instructions">Press start and name the colors: </p>
			<div className = "words" id="words"></div>
		</div>
	);
}

export default Statusbar;