import './App.css';
import Header from './Components/Header';
import CalculatorForm from './Components/CalculatorForm';
import Result from './Components/Result';
import { useEffect, useState } from 'react';

function App() {
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <div className="container">
      <button onClick={toggleTheme}>
        {darkMode ? "Tema Claro" : "Tema Escuro"}
      </button>
      <Header>Calculadora de Porcentagem</Header>
      <CalculatorForm onResult={setResult} />
      <Result result={result} />
    </div>
  );
}

export default App;
