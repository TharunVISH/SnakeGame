import {move} from './SnakeMovementFunctions.js'

document.addEventListener('keydown',CheckKey); //Add event listner to triger the function checkKey on any key press on keyboard

//The function compare the keycode of the key that pressed from keyboard with keycodes of up,down,left and right arows of keyboard
//Then call the move() function according to the key pressed
function CheckKey(event) {

  
    if (event.keyCode === 38) {
        // up arrow
        move("up","key_press");
    }
    else if (event.keyCode === 40) {
        // down arrow
        move('down',"key_press");
    }
    else if (event.keyCode === 37) {
       // left arrow
       move('left',"key_press");
    }
    else if (event.keyCode === 39) {
       // right arrow
       move('right',"key_press");
    }

}
