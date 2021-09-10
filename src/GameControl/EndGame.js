
import  {EndGame} from '../ControlFunctions/EndGameFunction'
function ButtonEndGame(){
    return(
        <span>
        <button type="button" class="btn btn-outline-danger"  id="btn_Stop" onClick={()=> EndGame()} >■</button>
        </span>
    )
}

export default ButtonEndGame;
