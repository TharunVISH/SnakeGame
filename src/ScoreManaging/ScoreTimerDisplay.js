
import Alert from 'react-bootstrap/Alert';

function ScoreTimerBoard(){
    return(
        <Alert variant="success" id ='score_bord'>
            <h1 className='ScoreHead'>#SCORE</h1>
            <hr />
                <p id="score" className='ScoreValue'>000</p>
                <p id = "timer">00:00</p>
                
        </Alert>
    );

}
export default ScoreTimerBoard;