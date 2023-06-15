

import Header from './components/Header';
import BMIForm from './components/BMIForm';
import Result from './components/Result';


import './app.scss'

import { useState } from 'react';

function App() {
  
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [result, setResult] = useState();

  return (
    <div className="container">
      <Header />
      <BMIForm 
      height={height}
      setHeight={setHeight}
      weight={weight} 
      setWeight={setWeight}
      setResult={setResult}
      />
      
      <Result 
      result={result}
      />
    
    </div>

    
  );
}

export default App;
