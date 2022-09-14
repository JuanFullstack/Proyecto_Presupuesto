import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
  presupuesto,
  gasto,
  setpresupuesto,
  isValidPresupuesto,
  setisValidPresupuesto,
  setgasto,
}) => {
  const [porcentaje, setporcentaje] = useState(0);

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalgastos = gasto.reduce((Total, gasto) => {
      return gasto.cantidad + Total;
    }, 0);

    const totalDisponible = presupuesto - totalgastos;

    const NuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setDisponible(totalDisponible);

    setTimeout(() => {
      setporcentaje(NuevoPorcentaje);
    }, 1500);

    setGastado(totalgastos);
  }, [gasto]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const handleResetApp = () => {
    const resultado = confirm('Deseas Reiniciar la aplicacion ');

    if (resultado) {
      setpresupuesto(0);
      setgasto([]);
      setisValidPresupuesto(false);
    }
  };

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas '>
      <div>
        <CircularProgressbar
          text={`${porcentaje}% Gastado`}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626 ' : '#3B82F6',

            textColor: '#3B82F6',
          })}
          value={porcentaje}
        />
      </div>

      <div className='contenido-presupuesto '>
        <button className='reset-app' type='button' onClick={handleResetApp}>
          Resetear app
        </button>

        <p>
          <span> Presupuesto:</span> {formatearCantidad(presupuesto)}
        </p>

        <p className={` ${disponible < 0 ? 'negativo' : ''} `}>
          <span> Disponible :</span> {formatearCantidad(disponible)}
        </p>

        <p>
          <span> Gastado:</span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;

const Dinero = 10000;

const FormatoDinero = function (number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(number);
};

FormatoDinero(Dinero);
