import './App.css';
import Header from './Components/Header';
import CalculatorForm from './Components/CalculatorForm';
import Result from './Components/Result';
import AllOptions from './Components/AllOptions';
import { act, useEffect, useState } from 'react';
import Add from './Components/Add';
import Subtract from './Components/Subtract';

const calculations = [    
  {id: "add", label: "Soma"},
  {id: "subtract", label: "Subtração"},
  {id: "division", label: "Divisão"},
  {id: "multiplication", label: "Multiplicação"},
  {id: "Exponentiation", label: "Exponenciação"},
  {id: "percentage", label: "Porcentagem"}
];

function App() {
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("add");

   //lógica para tema escuro e claro
  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <>
    <AllOptions onSelect={setActive} items={calculations} onResult={setResult}></AllOptions>

    <div className="container">
      <button onClick={toggleTheme}>
        {darkMode ? "Tema Claro" : "Tema Escuro"}
      </button>

      <Header items={calculations} activeId={active}></Header>

        {active === "add" && <Add onResult={setResult}></Add>}
        {active === "percentage" && <CalculatorForm onResult={setResult} />}
        {active === "subtract" && <Subtract onResult={setResult}></Subtract>}

      <Result result={result}/>
    </div>
    </>
  );
}

export default App;
