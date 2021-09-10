import {move} from './SnakeMovementFunctions'
import {GoAuto} from './SetGameModeFuntions'
import  {SetGameStatusPaused,HideGameStatus} from './SetGameStatusFunctions'
import {ResetDisplays,ResetVariables} from './ResetAll'

var var_AppleColor;
var previous_time_difference=0;
var time_difference;

function NewPauseResumeGame(){
    let game_action =document.getElementById("btn_game").innerHTML;
    let el=document.getElementById("btn_Auto");
    //New Game
    if (game_action==="New Game"){                                                        
        document.getElementById("btn_game").innerHTML="| |";
        Reset();

        //View Apple
        var_AppleColor='Red';
        GenerateApple();
        window.var_Blink =setInterval(function(){  Blink_Apple() }, 400);
        document.getElementById("btn_Stop").disabled = false;
        document.getElementById("btn_Auto").disabled = false;
        document.getElementById("Ob_pattern").disabled = true;
        document.getElementById("btn_View_score").disabled = true;
        GoAuto(el);

        //Start Timer
        window.var_StartTime = new Date().getTime();
        window.var_Timer=setInterval(function() {Timer()});
        
    }
    //Pause Game
    else if (game_action==="| |"){
        document.getElementById("btn_game").innerHTML="| ▶";

        //Pause apple blink
        clearInterval(window.var_Blink);
        if (document.getElementById(window.apple_id).className!=="active_box"){
        document.getElementById(window.apple_id).className="apple_box";
        
        }

        // Pause Timer
        clearInterval(window.var_Timer);
        previous_time_difference=time_difference;

        clearInterval(window.var_Auto);
        document.getElementById("btn_Auto").disabled = true;
        window.pause_status='On'
        SetGameStatusPaused();
    }
    //Resume
    else{
        window.pause_status='Off'
        document.getElementById("btn_game").innerHTML="| |";
        document.getElementById("btn_Auto").disabled = false;

        //Resume apple blink
        window.var_Blink =setInterval(function(){  Blink_Apple() }, 400);
        

        // Resume Timer
        window.var_StartTime = new Date().getTime();
        window.var_Timer=setInterval(function() {Timer()});

        // Resume Auto
        HideGameStatus();
        if (window.auto_mode==="on"){
        
        window.var_Auto =setInterval(function(){  move(window.current_snake_direction,"auto") },window.snake_movement_interval);
    
        }
    }

 }

function GenerateApple(){
    let rw_index=Math.floor(Math.random() * 16) + 1;
    let cl_index=Math.floor(Math.random() * 16) + 1;
    window.apple_id='id'+("0" + rw_index).slice(-2)+'_'+("0" +cl_index).slice(-2);

    if (window.current_tail_ids.includes(window.apple_id)||(window.obstacle_pattern.includes(window.apple_id))){
        GenerateApple();
    }
    document.getElementById(window.apple_id).className="apple_box";
    
}

function Reset(){
    ResetDisplays()
    for (let id of window.obstacle_pattern){
        document.getElementById(id).className="obstacle_box";
    }

    ResetVariables();
    previous_time_difference=0;

}

function Blink_Apple(){
    if (var_AppleColor==='red'){
        var_AppleColor='gray';
        document.getElementById(window.apple_id).className="box";

    }
    else{
        var_AppleColor='red';
        document.getElementById(window.apple_id).className="apple_box";

    }

}
function Timer(){
    let now = new Date().getTime();
    time_difference=now-window.var_StartTime+previous_time_difference;
    let minutes = Math.floor((time_difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time_difference % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML=("0" + minutes).slice(-2)+ ":" +  ("0" + seconds).slice(-2);
}

 export {GenerateApple,NewPauseResumeGame};