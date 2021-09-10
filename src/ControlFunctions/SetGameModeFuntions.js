//Set the Game to Auto or Manuel Mode

import {move} from './SnakeMovementFunctions.js'

function AutoManuel(){
    
    let button_element=document.getElementById("btn_Auto");
    let btn_status=button_element.innerHTML;
    
    if (btn_status==='Go Auto'){
        GoAuto(button_element);
    }
    if (btn_status==='Go Manuel'){
        GoManuel(button_element);
    }
}
function GoAuto(button_element){
    if(window.auto_mode!=="on"){
        button_element.innerHTML="Go Manuel";
        window.auto_mode="on";
        
        window.var_Auto =setInterval(function(){  move(window.current_snake_direction,"auto") }, window.snake_movement_interval);
    }
}
function GoManuel(button_element){
    button_element.innerHTML="Go Auto";
    clearInterval(window.var_Auto);
    window.auto_mode="off";
}


 export {GoManuel,GoAuto,AutoManuel};