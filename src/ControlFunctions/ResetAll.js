//Reset values on NewGame and change pattern

import  {HideGameStatus} from './SetGameStatusFunctions'
function ResetDisplays(){
    HideGameStatus();
    document.getElementById("score").innerHTML="000";
    document.getElementById("timer").innerHTML=("00:00");
    for (let id of window.current_tail_ids){
        document.getElementById(id).className="box";
    }
}

function ResetVariables(){
    window.score=0;
    window.current_head_id="id09_10";
    document.getElementById("id09_10").className="active_box";
    window.current_head_row_index=9;
    window.current_head_column_index=10;
    window.current_snake_direction ="right";
    window.apple_eated='no';
    window.current_tail_ids=["id09_10"];
    window.pause_status='Off'
    window.snake_movement_interval=500;
}
export {ResetDisplays,ResetVariables};