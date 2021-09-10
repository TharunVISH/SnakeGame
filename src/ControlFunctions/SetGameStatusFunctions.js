//Display the game Status -PAUSSED/GAME OVER

function HideGameStatus(){
    document.getElementById('game_status').innerHTML="";
    document.getElementById('game_status').className="game_status_hidden";

}
function SetGameStatusPaused(){
    document.getElementById('game_status').innerHTML="PAUSED";
    document.getElementById('game_status').className="game_status_show";

}

function SetGameStatusGameOver(){
    document.getElementById('game_status').innerHTML="GAME OVER";
    document.getElementById('game_status').className="game_status_show";
}
export {HideGameStatus,SetGameStatusPaused,SetGameStatusGameOver}