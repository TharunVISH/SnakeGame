import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Global variables
window.cur_dirc ="right";                        //The Current Direcion of snake
window.auto="off";                              //To know whether the mode of game is Auto or not
window.apple_id="";                            //The Current id of box that act as theApple
window.score=0;                               //The Current Score in integer format
window.cur_act_id="id09_10";                 //The Current Head of snake
window.rw_pos=9;                            //The Current Row position  of snake head
window.cl_pos=10;                          //The Current Column position  of snake head
window.pause_status='On'                  //To know whether the game is paused as well as stoped or not started yet
window.all_act_ids=["id09_10"];          //The Current Body of snake. Array of IDs
window.apple_eated='no';                //To check if there is an active Apple or not
window.snake_movement_interval=500;    //The Time Intervel at which move fuction is called to stimulate the movement of snake
window.grid_order=20;                 //To check if there is an active Apple or not
window.obstacle_pattern=[];          //The current obstacle_pattern that used
window.high_score=[];               //The variable that used to store score and time in order of score

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Default srttings
document.getElementById("btn_Stop").disabled = true;
document.getElementById("btn_Auto").disabled = true;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
