import './App.css';
import {useEffect} from 'react';
import { useTelegram } from './hooks/useTelegram';

function App() {

  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <h1>Привет! Уходи💅🥐</h1>
      <button onClick={onClose}>Zaкрыть</button>
      <button onClick={onToggleButton}>toggle</button>
      <span className={'username'}></span>
    </div>
  );
}

export default App;
