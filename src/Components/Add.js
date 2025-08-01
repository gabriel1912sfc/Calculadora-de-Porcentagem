import { useState } from "react";

function Add({onResult}){
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
  
    const calculate = (e) => {
      e.preventDefault();
  
      //convertendo as strings do useState para um float.
      const f = parseFloat(firstValue);
      const s = parseFloat(secondValue);
  
      //testa se os valores são NaN. Verifica se os campos são vazios.
      if (isNaN(f) || isNaN(s)) {
        onResult('Insira valores válidos.');
        return;
      }
  
      const res = f + s;
      onResult(`A soma de ${f} e ${s} é ${res}`);
    };
  
    return (
      <form onSubmit={calculate}>
        <label>Digite o primeiro valor da soma</label>
        <input
          type="number"
          value={firstValue}
          onChange={(e) => setFirstValue(e.target.value)}
        />
  
        <label>Digite o segundo valor da soma</label>
        <input
          type="number"
          value={secondValue}
          onChange={(e) => setSecondValue(e.target.value)}
        />
  
        <button type="submit">Calcular</button>
      </form>
    );
}
export default Add;