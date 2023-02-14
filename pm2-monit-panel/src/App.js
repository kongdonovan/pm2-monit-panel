import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const pm2 = require('pm2')
const fs = require('fs')

function App() {
  let processList = connectPM2()
  console.log(processList)
  return (
    
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <p>test 1</p>
          </Col>
          <Col>
            <p>test 2</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function connectPM2() {
  let retList;
  pm2.connect(errCallback);
  pm2.list((err, list) => {
    retList = list;
  })
  return retList
}

function errCallback(err) {
  console.log(err)
}

export default App;
