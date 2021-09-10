import React from 'react';

import './App.css';
import './GameWindowGrid/StyleGrid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ScoreManaging/StyleScore.css';
import './GameControl/StyleGameControls.css';


import NavButtons from './GameControl/NavigationButtons';
import Grid from './GameWindowGrid/Grid';
import AutoManuelButton from './GameControl/GameMode';
import './ControlFunctions/KeyboardListner';
import ButtonGameControl from './GameControl/GameControl';
import ScoreTimerBoard from './ScoreManaging/ScoreTimerDisplay';
import logo from './apple.gif';
import ButtonEndGame from './GameControl/EndGame';
import GameStatus from './GameControl/GameStatus';
import Obstacle from './GameControl/SelectObstacle';
import ButtonViewScore from './ScoreManaging/ShowPreviousScore';


//Global variables
window.current_snake_direction ="right";          //The Current Direcion of snake
window.auto_mode="off";                          //To know whether the mode of game is Auto or not
window.apple_id="";                             //The Current id of box that act as theApple
window.score=0;                                //The Current Score in integer format
window.current_head_id="id09_10";             //The Current Head of snake
window.current_tail_ids=["id09_10"];         //The Current Body of snake. Array of IDs
window.current_head_row_index=9;            //The Current Row position  of snake head
window.current_head_column_index=10;       //The Current Column position  of snake head
window.pause_status='On'                  //To know whether the game is paused as well as stoped or not started yet
window.apple_eated='no';                 //To check if the Apple got eated on previous move
window.snake_movement_interval=500;     //The Time Intervel at which move fuction is called to stimulate the movement of snake
window.grid_order=20;                  //To check if there is an active Apple or not
window.obstacle_pattern=[];           //The current obstacle_pattern that used
window.score_cards=[];               //The Array ofObjects that used to store score and time in order of score



function App() {

  return (
    <div>

    <br></br>
      <table id='container_table'>
        <tr>
          <h1>Eat The Apple<span><img id="logo" src={logo} alt="Apple" /></span></h1>
        </tr>
        <tr>
          <td id="container_grid">              
                <Grid/>
          </td>
          <td id="container_control_btns">
              <ScoreTimerBoard/>
              <NavButtons/>
              
              <ButtonGameControl/>
              <AutoManuelButton/><ButtonEndGame/>
              
              <Obstacle/>
              <ButtonViewScore/>
            
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