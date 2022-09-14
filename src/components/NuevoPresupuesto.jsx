import React, { useState } from 'react';
import Header from './Header';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({
  presupuesto,
  setpresupuesto,
  setisValidPresupuesto,
}) => {
  const [mensaje, setmensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setmensaje('ingrese valor valido ');
      return;
    }
    setmensaje('');
    setisValidPresupuesto(true);
  };

  return (
    <div className=' contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
          <label> Definir Presupuesto</label>
          <input
            className='nuevo-presupuesto'
            type='number'
            placeholder=' Añade tu presupuesto '
            value={presupuesto}
            onChange={(e) => setpresupuesto(Number(e.target.value))}
          />
        </div>

        <input type='submit' value='AÑADIR' />
        {mensaje && <Mensaje tipo='error'> {mensaje} </Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
