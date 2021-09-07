 import Popup from './ScorePopup';
 import {useState} from 'react'
 import Button from 'react-bootstrap/Button';
 let score_rows=[];
    function HighScore(){
        const [popup_status,setPopup_status]=useState(false);
        
    
        return(
                <>
                <Button variant="primary" id="btn_View_score" onClick={() => {UpdateScoreTable();setPopup_status(true);}}>
                    View Score
                </Button>

                <Popup
                    show={popup_status}
                    onHide={() => setPopup_status(false)} 
                    TableBody={score_rows}
                />
                </>
        )
    }
    function UpdateScoreTable(){

        score_rows=[];
        let rank=1;
        if (window.high_score.length===0){
            score_rows.push(<tr><td colspan={3}>No records to show. Create New !!!</td></tr>);
        }

        else{
        for (let score_card of window.high_score){
            
            score_rows.push(<tr>{rank}<td>{score_card.score}</td>{score_card.time}</tr>);
            rank++
            }
        }
     

    }
    
    export default HighScore;