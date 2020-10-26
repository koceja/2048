import React, { useState, useEffect } from 'react';
import './App.css';
import Game from './game.js';

const game = new Game(4);

function Board(props) {
  const board = props.board;

  const size = Math.sqrt(board.length);

  return (
    <div id="board-container">
      <div id="board">
        {board.map(item => (<div style={{flex: `1 0 ${100/size}%`, alignItems: "center"}}>
          <div className={`tile tile-${item}`} style={{margin: "3px", height: `${450/size - 6}px`, display: "flex"}}><div style={{margin: "auto"}}>{(item === 0) ? null: item}</div></div></div>))}
      </div>
    </div>
    
  )
}

function Container(props) {

  const [gameState, setGameState] = useState(game.getGameState());

  const handleKeyPress = (e) => {
    let direction = "";
    switch (e.code) {
      case "ArrowUp": 
        direction = "up";
        break;
        case "ArrowDown": 
        direction = "down";
        break;
        case "ArrowLeft": 
        direction = "left";
        break;
        case "ArrowRight": 
        direction = "right";
        break;
        default:
          break;
    }
    game.move(direction);
  }

  const updateBoard = (newGameState) => {
    setGameState({...newGameState});
  };

  useEffect(() => {
    game.onMove(updateBoard);
    game.onWin(updateBoard);
    game.onLose(updateBoard);

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);  
      game.unregisterOnMove(updateBoard);
      game.unregisterOnWin(updateBoard);
      game.unregisterOnLose(updateBoard);

    };
  })

  const reset = () => {
    game.setupNewGame();
    setGameState({...game.getGameState()});
  };

  return (
    <div style={{width: "450px", margin: "auto"}}>
      <div>
        <div style={{float: "right", marginLeft: "auto"}}>
          <h1 style={{marginTop: "0px", fontWeight: "normal"}}>Score: {gameState.score}</h1>
        </div>
        <h1>2048</h1>
      </div>
      <div style={{position: "relative"}}>
      {(gameState.won) ? <div className="screen winning">
        you won</div>
        : (gameState.over) ? <div className="screen losing">
            you lost
          </div> : null}
      <Board board={gameState.board} />
      </div>
      
      <div style={{textAlign: "center", paddingTop: "20px"}}>
        <button style={{backgroundColor: "black", color: "white", border: "1px solid gray", width: "100px", height: "35px", fontWeight: "bold", borderRadius: "2px"}} onClick={reset}>Reset</button>

      </div>
      <div style={{fontWeight: "600"}}>
        <p>Instructions: Use the arrow keys to move the tiles. Combine neighboring tiles together to try to reach 2048.</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
