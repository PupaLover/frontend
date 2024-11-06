import './App.css';
import {useEffect} from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';

import { Route, Routes } from 'react-router-dom';
import ProductList from './ProductList/ProductList';
import Form from './components/Form/Form';


function App() {

  const {onClose,onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route index element={<ProductList />}/ >
        <Route path={'form'} element={<Form />}/ >
      </Routes>

      <button class='Toggle' onClick={onToggleButton}>toggle</button>
      <button className='closeBtn' onClick={onClose}>Zaкрыть</button>
    </div>
  );
}

export default App;
