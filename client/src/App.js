import { useDispatch } from 'react-redux';
import { increment } from './redux/slices/goldSlice';
import laughing_man from './laughing_man.svg'
import './App.css';

import Resources from './components/Resources';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Resources />
      <header className="App-header">
        <div className="logo-container" onClick={() => dispatch(increment())}>
          <img src={laughing_man} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
