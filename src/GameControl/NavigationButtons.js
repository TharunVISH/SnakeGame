
import {move} from '../ControlFunctions/SnakeMovementFunctions.js'



function NavButtons(){
    return(
        <div className='NavContainer'>
            <button onClick={()=>move("up","key_press")} className="btn btn-secondary btn-lg">↑</button>
            <br></br>
            <button  onClick={()=>move("left","key_press")} className="btn btn-secondary btn-lg">←</button>
            <button  onClick={()=>move("down","key_press")} className="btn btn-secondary btn-lg">↓</button>
            <button  onClick={()=>move("right","key_press")} className="btn btn-secondary btn-lg">→</button>
           
        </div>

    );
}


export default NavButtons;
