import { useState } from 'react';

function CalculatorForm({ onResultado }) {
  const [valor, setValor] = useState('');
  const [porcentagem, setPorcentagem] = useState('');

  const calcular = (e) => {
    e.preventDefault();

    const v = parseFloat(valor);
    const p = parseFloat(porcentagem);

    if (isNaN(v) || isNaN(p)) {
      onResultado('Insira valores válidos.');
      return;
    }

    const res = (v * p) / 100;
    onResultado(`${p}% de ${v} é ${res}`);
  };

  return (
    <form onSubmit={calcular}>
      <label>Qual valor?</label>
      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <label>Qual porcentagem?</label>
      <input
        type="number"
        value={porcentagem}
        onChange={(e) => setPorcentagem(e.target.value)}
      />

      <button type="submit">Calcular</button>
    </form>
  );
}

export default CalculatorForm;