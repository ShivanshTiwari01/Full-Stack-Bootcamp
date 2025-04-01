import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card
        name="Ronaldo"
        image="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
        position="Forward"
        club="Al Nassr"
        country="Portugal"
      />
      <Card
        name="Messi"
        image="https://upload.wikimedia.org/wikipedia/commons/0/0c/Lionel_Messi_20180626.jpg"
        position="Forward"
        club="Inter Miami"
        country="Argentina"
      />
      <Card
        name="Neymar"
        image="https://upload.wikimedia.org/wikipedia/commons/0/0f/Neymar_2018.jpg"
        position="Forward"
        club="Al Hilal"
        country="Brazil"
      />
    </div>
  );
}

export default App;
