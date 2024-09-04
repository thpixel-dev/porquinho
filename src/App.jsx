import React, { useState } from 'react';
import './App.css';
import Titulo from './componentes/titulo';

function App() {
  const [precoProduto, setPrecoProduto] = useState(0);
  const [moedas, setMoedas] = useState({
    umReal: 0,
    cinquentaCentavos: 0,
    vinteCincoCentavos: 0,
    dezCentavos: 0,
    cincoCentavos: 0,
  });

  const handlePrecoProdutoChange = (e) => {
    setPrecoProduto(parseFloat(e.target.value));
  };

  const handleMoedaChange = (e, tipo) => {
    setMoedas((prevMoedas) => ({ ...prevMoedas, [tipo]: parseInt(e.target.value) }));
  };

  const calcularValorTotal = () => {
    const valorTotal =
      moedas.umReal +
      moedas.cinquentaCentavos * 0.5 +
      moedas.vinteCincoCentavos * 0.25 +
      moedas.dezCentavos * 0.1 +
      moedas.cincoCentavos * 0.05;
    return valorTotal;
  };

  const podeComprarProduto = () => {
    const valorTotal = calcularValorTotal();
    return valorTotal >= precoProduto;
  };

  const mostrarResultado = () => {
    return precoProduto > 0 && Object.values(moedas).some((value) => value > 0);
  };

  return (
    <div>
      <Titulo />
      <p>Digite o valor do produto:</p>
      <input type="number" value={precoProduto} onChange={handlePrecoProdutoChange} />
      <p>Valores:</p>
      <p>
        1 real: <input type="number" value={moedas.umReal} onChange={(e) => handleMoedaChange(e, 'umReal')} />
      </p>
      <p>
        50 centavos: <input type="number" value={moedas.cinquentaCentavos} onChange={(e) => handleMoedaChange(e, 'cinquentaCentavos')} />
      </p>
      <p>
        25 centavos: <input type="number" value={moedas.vinteCincoCentavos} onChange={(e) => handleMoedaChange(e, 'vinteCincoCentavos')} />
      </p>
      <p>
        10 centavos: <input type="number" value={moedas.dezCentavos} onChange={(e) => handleMoedaChange(e, 'dezCentavos')} />
      </p>
      <p>
        5 centavos: <input type="number" value={moedas.cincoCentavos} onChange={(e) => handleMoedaChange(e, 'cincoCentavos')} />
      </p>
      {mostrarResultado() && (
        <p>
          Você pode comprar o produto: {podeComprarProduto() ? 'sim' : 'não'}
        </p>
      )}
    </div>
  );
}

export default App;