
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavButtons from './NavigationButtons';
import Grid from './Grid';
import Auto from './Auto';
import './FindKeypress'
import BtnGameCtrl from './GameMode'
import ScoreBoard from './Score'
import logo from './apple.gif';
import BtnStop from './EndGame';
import GameStatus from './Game_Status'
import Obstacle from './SelectObstacle'
import HighScore from './HighScore';


function App() {

  return (
    <div>
    <br></br>
      <table id='container'>
        <tr>
          <h1>Eat The Apple<span><img id="logo" src={logo} alt="Apple" /></span></h1>
        </tr>
        <tr>
          <td id="col1">              
                <Grid/> 
          </td>
          <td id="col2">
              <ScoreBoard/>
              <NavButtons/>
              
              <BtnGameCtrl/>
              <Auto/><BtnStop/>
              
              <Obstacle/>
              <HighScore/>
            
          </td>
        </tr>
        <tr>
        <GameStatus/>
        </tr>
      </table>
      
      </div>
  );
}


export default App;