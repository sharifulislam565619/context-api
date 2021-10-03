import logo from './logo.svg';
import './App.css';
import Grandfather from './components/Granfather/Grandfather';
import { createContext, useState } from 'react';

export const RingContext = createContext("ring")

function App() {
  const [house, setHouse] = useState(2)
  const ornaments = "kada matir ring"





  return (
    <RingContext.Provider value={[ornaments, house]}>
      <div className="App">
        <button onClick={() => setHouse(house + 1)}>Build new house</button>
        <Grandfather house={house}>
          <h3>ami jekhane</h3>
        </Grandfather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
