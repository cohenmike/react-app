import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from './redux/slices/goldSlice';
import { selectProducer } from './redux/slices/producerSlice';
import laughing_man from './laughing_man.svg'
import './App.css';

import Resources from './components/Resources';
import Producers from './components/Producers';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Resources />
      <Producers />
      <header className="App-header">
        <div className="logo-container" onClick={() => dispatch(incrementByAmount(1))}>
          <img src={laughing_man} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
