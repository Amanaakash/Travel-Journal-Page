import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import data from './components/data';

function App() {
  const cards = data.map(item =>{
    return(
      <Card 
      {...item}
      />
    )
  })
  return (
    <div className="container">
      <NavBar/>
     <section className='cards-list'>{cards}</section> 
    </div>
  );
}

export default App;
