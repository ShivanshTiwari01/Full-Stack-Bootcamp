import Card from './components/Card';
import notes from '../notes';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Keeper App</h1>
      </header>
      <div className="note-list">
        {notes.map((note: { key: number; title: string; content: string }) => (
          <Card key={note.key} title={note.title} content={note.content} />
        ))}
      </div>
    </>
  );
}

export default App;
