import React from 'react';
import ReactDOM from 'react-dom';




const tick=()=>{
  const elem=(
    <div>
      <h1>Hi Freinds</h1>
      <h2>it is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(elem,document.getElementById('root'));
}

setInterval(() => {
  tick();
}, 1000);


