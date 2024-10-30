import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;


function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();

  }
  
  return (
    <div className="App">
      <h1>Xyi.png</h1>
      <button onClick={onClose}>Zaкрыть</button>
    </div>
  );
}

export default App;
