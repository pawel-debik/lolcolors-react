import React, {useState} from 'react';
import Timer from './Timer.js';
import Interface from './Interface';
import Statusbar from './Statusbar';
import './App.css';

function App() {

	const [gameProgress, setgameProgress] = useState('5');
	const [gameStatus, setGameStatus] = useState('Start');
	const [timerStatus, setTimerStatus] = useState('reset');
	const [gameDescription, setgameDescription] = useState('Press start and name the colors:');

	function doStuff(props){
		setGameStatus('Game running');
		setgameDescription('Name the colors: ');
		setTimerStatus('start');

		let gameTime = 5;

		var er = function() {
			if (gameTime <= 0) {
				clearInterval(timeInterval);
				setGameStatus('Game over. Try again.');
				setgameProgress(0);
				setTimerStatus('reset');
			} else {
				setgameProgress(gameTime);
			}

			gameTime--;
		}

		er();

		let timeInterval = setInterval(er, 1000);

		return 'a';
	}

	return (
		<div className="App">
				<Timer progress={timerStatus} counter={gameProgress} />
				<Statusbar description={gameDescription}/>
				<Interface status={gameStatus} doSomething={doStuff} />
		</div>
	);
}

export default App;