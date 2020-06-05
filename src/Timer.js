import React, {useEffect} from 'react';
import './timer.css';

const Timer = function(props){

	useEffect(() => {
		console.log(props.counter);
	});

	return(
		<div className="timer">
			<div className="circle-wrap">
				<svg id="animated" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="45" fill="#f5eadd"/>
					<path id="progress" className={props.progress} 
						d ="M50 10
							a 40 40 0 0 1 0 80
							a 40 40 0 0 1 0 -80">
					</path>
					<text 
						id="count-down" 
						x="50" 
						y="50" 
						text-anchor="middle" 
						dy="7" 
						font-size="20"
						>{props.counter}</text>
				</svg>
			</div>
		</div>
	);
}

export default Timer;