
import {AutoManuel} from '../ControlFunctions/SetGameModeFuntions'

function AutoManuelButton(){
     return(
         <span>
             <button type="button" class="btn btn-outline-primary"  id="btn_Auto" onClick={()=> AutoManuel()} >Go Auto</button>
         </span>
        
     );
 }

 export default AutoManuelButton;