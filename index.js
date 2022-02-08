import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Header from './components/Header';
import data from './data';
import './index.css';


function Page(){
  const locationData=data.map(ltd=>{
    return(
      <Card
      ltd={ltd}/>
    )
  })
  return(
    <div>
      <Header/>
      {locationData}
    </div>
  )
}

ReactDOM.render(<Page/>,document.getElementById('root'))