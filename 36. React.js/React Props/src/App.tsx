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
    </div>
  );
}

export default App;
