import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import korea from './data'


function App() {

  let [ account, setAccount ] = useState(false);
  let [ i, setI ] = useState('');
  let [ fade, setFade ] = useState('');

  return (
    <div className="App">
      <div className='main-img'>
        {
          korea.map((a, i) => {
            return (
              <div className={`main-name main-name-${i}`} onMouseOver={()=>{
                let timer = setTimeout(()=>{setFade('card-focus')}, 100);
                setAccount(true);
                setI(a.id);
              }} onMouseOut={()=>{
                setAccount(false);
                setFade('');
              }}>{a.name}</div>
            );
          })
        }

        {
          account == true ? <Account korea = { korea } i = { i } fade = { fade } /> : null
        }

      </div>
    </div>
  );
}

function Account(props) {

  return (
    <>
      <div className={`card ${props.fade} card-${props.korea[props.i].id} scroll`}>
        <div>
          <h3>{props.korea[props.i].name} <span>{props.korea[props.i].eng_name}</span></h3>
          <h4>도시정보</h4>
          <h5>설명</h5>
        </div>
      </div>
    </>
  );
}

export default App;
