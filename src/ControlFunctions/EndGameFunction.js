//End the Game on Button press or Game Over

import { GoManuel } from './SetGameModeFuntions'
import  {HideGameStatus} from './SetGameStatusFunctions'

function EndGame(){
    UpdateHighScore();

    let el=document.getElementById("btn_Auto");
    document.getElementById("btn_game").innerHTML="New Game";

        //Remove apple
        clearInterval(window.var_Blink);
        if (document.getElementById(window.apple_id).className!=="active_box"){
        document.getElementById(window.apple_id).className="box";
        window.apple_id="";
        }

        // Stop Timer
        clearInterval(window.var_Timer);

        GoManuel(el);
        document.getElementById("Ob_pattern").disabled = false;
        document.getElementById("btn_View_score").disabled = false;
        document.getElementById("btn_Auto").disabled = true;
        document.getElementById("btn_Stop").disabled = true;
        if (window.pause_status==='On'){
        HideGameStatus();}
        window.pause_status='On'
        
}
function UpdateHighScore(){
    let index=0;
    let cur_score_card={
        score:document.getElementById("score").innerHTML,
        time:document.getElementById("timer").innerHTML
    }
    
   if (window.score_cards.length===0){

        window.score_cards=[cur_score_card];
       
    }
    else{
        for (let score_card of window.score_cards){

            if (score_card.score<=window.score){
                window.score_cards.splice(index, 0, cur_score_card);
                break;
            }
            else{
                index++;
            }
    }
}
}
export {EndGame};