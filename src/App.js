import './App.css';
import Header from './Components/Header';
import CalculatorForm from './Components/CalculatorForm';
import Result from './Components/Result';
import AllOptions from './Components/AllOptions';
import { useEffect, useState } from 'react';

const calculations = [    
  {id: "add", label: "Soma"},
  {id: "subctract", label: "Substração"},
  {id: "division", label: "Divisão"},
  {id: "multiplication", label: "Multiplicação"},
  {id: "Exponentiation", label: "Exponenciação"},
  {id: "percentage", label: "Porcentagem"}
];

function App() {
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

   //lógica para tema escuro e claro
  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <>
    <AllOptions items={calculations}></AllOptions>
    <div className="container">
      <button onClick={toggleTheme}>
        {darkMode ? "Tema Claro" : "Tema Escuro"}
      </button>
      <Header>Calculadora de Porcentagem</Header>
      <CalculatorForm onResult={setResult} />
      <Result result={result} />
    </div>
    </>
  );
}

export default App;
