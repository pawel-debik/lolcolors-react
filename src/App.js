import React, {useState} from 'react';
import Timer from './Timer.js';
import Interface from './Interface';
import Statusbar from './Statusbar';
import './App.css';

function App() {

	const [progress, setProgress] = useState('5');
	const [gameStatus, setGameStatus] = useState('Start');

	function doStuff(props){
		setGameStatus('Game running');

		let gameTime = 5;

		let timeInterval = setInterval(function() {
			if (gameTime < 1) {
				clearInterval(timeInterval);
				setGameStatus('game over');
			} else {
				setGameStatus('game running');
				setProgress(gameTime);
			}

			gameTime--;
		}, 1000);

		return 'a';
	}

	return (
		<div className="App">
				<Timer progress={progress} counter={progress} />
				<Statusbar />
				<Interface status={gameStatus} doSomething={doStuff} />
		</div>
	);
}

export default App;