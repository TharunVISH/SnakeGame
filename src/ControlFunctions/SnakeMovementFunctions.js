//move() function changes the snake position 


import {GenerateApple} from './GameControlFunctions'
import  {EndGame} from './EndGameFunction'
import  {SetGameStatusGameOver} from './SetGameStatusFunctions'

let move_complete_flag='completed';             //Flag used to prevent bypassing of move() fuction on quick keypresses

function move(direction,called_from){
    if (window.pause_status!=='On'){
    
    //Prevent snake from moving backward
    if((((window.current_snake_direction==="up") && (direction==="down")))||(((window.current_snake_direction==="down") && (direction==="up")))||(((window.current_snake_direction==="left") && (direction==="right"))) || (((window.current_snake_direction==="right") && (direction==="left")))){
    
        return false;

    }
    /////////////////////////////

    //Move the snake
    //In auto mode navigation button press will onlly change the direction      
    if (((called_from==="key_press") && (window.auto_mode==="off")) || (called_from==="auto")){
        
        //Adding Tail
        if(window.apple_eated==='yes'){
            window.apple_eated='no';
        }
        else{
            document.getElementById(window.current_tail_ids[window.current_tail_ids.length-1]).className="box";
            window.current_tail_ids.pop();
        }
        //////////////////////////////////////
       
        //Change the row and column index according to the direction passed to move()function
        if (direction ==="up"){
            if(window.current_head_row_index===1){
                window.current_head_row_index=window.grid_order;
            }
            else{
                window.current_head_row_index-=1;
            }
        }
        if (direction ==="down"){
            if(window.current_head_row_index===window.grid_order){
                window.current_head_row_index=1;
            }
            else{
                window.current_head_row_index+=1;
            }
        }
        if (direction ==="left"){
            if(window.current_head_column_index===1){
                window.current_head_column_index=window.grid_order;
            }
            else{
                window.current_head_column_index-=1;
            }
        }
        if (direction ==="right"){
            if(window.current_head_column_index===window.grid_order){
                window.current_head_column_index=1;
            }
            else{
                window.current_head_column_index+=1;
            }
        }
        

        window.current_head_id='id'+("0" + window.current_head_row_index).slice(-2)+'_'+("0" +window.current_head_column_index).slice(-2);

        //Game Over
        if ((window.current_tail_ids.includes(window.current_head_id))||(window.obstacle_pattern.includes(window.current_head_id))){
            SetGameStatusGameOver();
            
            EndGame();
        }
        if (window.current_tail_ids.length>0){
            document.getElementById(window.current_tail_ids[0]).className='tail_box';
        }

        //Move Snake
        document.getElementById(window.current_head_id).className="active_box";
        window.current_tail_ids.unshift(window.current_head_id);
       //////////////

        
        //When snake eats the apple
        if (window.current_head_id===window.apple_id){
            window.apple_eated='yes';
            GenerateApple();

            //Update score and display it in three digit format
            window.score+=1;
            document.getElementById("score").innerHTML=window.score.toString().padStart(3, "0")      

            //Increse snake speed 
            if (window.snake_movement_interval>200){
                AddSpeed();
            }
        }

        move_complete_flag='completed';
        
    }
    
    //Update direction. Check the previous move completed 
    if((move_complete_flag==='completed')&&(called_from==="key_press")){ 
        window.current_snake_direction=direction;
        move_complete_flag='in_progress';
    
    }
    
}
}
function AddSpeed(){

clearInterval(window.var_Auto);            //Stop current movement if any
window.snake_movement_interval-=25;       //Reduce time intervel

//Only need to resume movement when the game is in auto mode
if (window.auto_mode==="on"){
    window.var_Auto =setInterval(function(){  move(window.current_snake_direction,"auto") },window.snake_movement_interval);
}


}
export {move};