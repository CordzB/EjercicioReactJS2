import React from 'react';
import useQuadraticCalculation from '../hooks/useQuadraticCalculation';

const QuadraticForm = () => {
  const {
    a,
    b,
    c,
    setA,
    setB,
    setC,
    calculate,
  } = useQuadraticCalculation();

  const handleClear = () => {
    setA('');
    setB('');
    setC('');
  };

  return (
    <div className="container mt-5">
      <h2>Calculadora de la Fórmula Cuadrática</h2>
      <form onSubmit={calculate}>
        <div className="mb-3">
          <label className="form-label">Coeficiente de a:</label>
          <input
            type="text"
            className="form-control"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="Ingrese el valor de a"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Coeficiente de b:</label>
          <input
            type="text"
            className="form-control"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="Ingrese el valor de b"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Coeficiente de c:</label>
          <input
            type="text"
            className="form-control"
            value={c}
            onChange={(e) => setC(e.target.value)}
            placeholder="Ingrese el valor de c"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Calcular
        </button>
        <button 
          type="button" 
          className="btn btn-danger ml-2" 
          onClick={handleClear}
        >
          Limpiar
        </button>
      </form>
    </div>
  );
};

export default QuadraticForm;
