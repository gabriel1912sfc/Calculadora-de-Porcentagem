import './App.css';
import Header from './Components/Header';
import CalculatorForm from './Components/CalculatorForm';
import Result from './Components/Result';
import { useState } from 'react';

function App() {
  const [resultado, setResultado] = useState(null);

  return (
    <div className="container">
      <Header>Calculadora de Porcentagem</Header>
      <CalculatorForm onResultado={setResultado} />
      <Result resultado={resultado} />
    </div>
  );
}

export default App;
