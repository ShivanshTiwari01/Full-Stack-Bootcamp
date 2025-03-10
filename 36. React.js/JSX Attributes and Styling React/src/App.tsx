import { useState } from 'react';
import reactLogo from './assets/react.svg'; // eslint-disable-line
import viteLogo from '/vite.svg'; // eslint-disable-line
import './App.css';

function App() {
  const [count, setCount] = useState(0); // eslint-disable-line

  return (
    <>
      <h1 className="title"> My name is Shivansh</h1>
      <h2> I am a Web Developer</h2>
      <h3> I am a Full Stack Developer</h3>
      <ul className="list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </>
  );
}

export default App;
