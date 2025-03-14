import './App.css';

const date = new Date();

const currentTime = date.getHours();
let greeting = '';

const customStyle = {
  color: '',
};

if (currentTime < 12) {
  greeting = 'Good Morning';
  customStyle.color = 'red';
} else if (currentTime < 18) {
  greeting = 'Good Afternoon';
  customStyle.color = 'green';
} else {
  greeting = 'Good Evening';
  customStyle.color = 'blue';
}

function App() {
  return (
    <>
      <h1 style={customStyle}>{greeting}</h1>
    </>
  );
}

export default App;
