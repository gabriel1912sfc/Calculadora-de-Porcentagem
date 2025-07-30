import { useState } from 'react';

function CalculatorForm({ onResult }) {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');

  const calculate = (e) => {
    e.preventDefault();

    //convertendo as strings do useState para um float.
    const v = parseFloat(value);
    const p = parseFloat(percentage);

    //testa se os valores são NaN. Verifica se os campos são vazios.
    if (isNaN(v) || isNaN(p)) {
      onResult('Insira valores válidos.');
      return;
    }

    const res = (v * p) / 100;
    onResult(`${p}% de ${v} é ${res}`);
  };

  return (
    <form onSubmit={calculate}>
      <label>Qual valor?</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <label>Qual porcentagem?</label>
      <input
        type="number"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      />

      <button type="submit">Calcular</button>
    </form>
  );
}

export default CalculatorForm;