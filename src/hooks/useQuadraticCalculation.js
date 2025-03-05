import { useState } from 'react';
import Swal from 'sweetalert2';

const useQuadraticCalculation = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');

  const calculate = (e) => {
    e.preventDefault();

    if (a === '' || b === '' || c === '') {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor, ingrese todos los coeficientes.',
      });
      return;
    }

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      Swal.fire({
        icon: 'error',
        title: 'Entrada no válida',
        text: 'Todos los coeficientes deben ser números.',
      });
      return;
    }

    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    const discriminante = bNum * bNum - 4 * aNum * cNum;

    if (discriminante < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Sin soluciones reales',
        text: 'La ecuación no tiene soluciones reales.',
      });
    } else {
      const x1 = (-bNum + Math.sqrt(discriminante)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(discriminante)) / (2 * aNum);
      Swal.fire({
        icon: 'success',
        title: 'Soluciones encontradas',
        text: `Las soluciones son: x1 = ${x1}, x2 = ${x2}`,
      });
    }
  };

  return {
    a,
    b,
    c,
    setA,
    setB,
    setC,
    calculate,
  };
};

export default useQuadraticCalculation;
