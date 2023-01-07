import './App.css';
import Game from './components/game';

function App() { 
  return (
    <div className="App">
      <Game rows={20} columns={10}/>
    </div>
  );
}

export default App;
// 0.35.58