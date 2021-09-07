import Modal from 'react-bootstrap/Modal';


function Popup(props){

        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Score Board
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table className='score_table'>
                  <tr>
                      <th>Rank</th>
                      <th>Score</th>
                      <th>Time</th>
                  </tr>
                  {props.TableBody}
              </table>
            </Modal.Body>
            
          </Modal>
        );
        
      }


      


export default Popup;