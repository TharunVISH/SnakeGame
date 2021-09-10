

import {NewPauseResumeGame} from '../ControlFunctions/GameControlFunctions';



function ButtonGameControl(){
     return(
         <div>
             <button type="button" class="btn btn-success" id="btn_game" onClick={()=> NewPauseResumeGame()}>New Game</button>
         </div>
        
     );
 }


 export default ButtonGameControl;
