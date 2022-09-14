import { useState, useEffect } from 'react';
import Cerrarbtn from '../img/cerrar.svg';
import Mensaje from './Mensaje';

const Modal = ({
  setmodal,
  animarmodal,
  guardargatos,
  gastoeditar,
  setgastoeditar,
}) => {
  const [nombre, setnombre] = useState('');
  const [cantidad, setcantidad] = useState(0);
  const [categoria, setcategoria] = useState('');
  const [mensaje2, setmensaje2] = useState('');
  const [id, setid] = useState('');
  const [fecha, setfecha] = useState('');

  useEffect(() => {
    if (Object.keys(gastoeditar).length > 0) {
      setnombre(gastoeditar.nombre);
      setcantidad(gastoeditar.cantidad);
      setcategoria(gastoeditar.categoria);
      setid(gastoeditar.id);
      setfecha(gastoeditar.fecha);
    }
    // return () => {
    //   second
    // }
  }, [gastoeditar]);

  const OcultarModal = () => {
    setgastoeditar({});

    setTimeout(() => {
      setmodal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes('')) {
      setmensaje2('Todos los campos son obligatorios ');

      setTimeout(() => {
        setmensaje2('');
      }, 3000);

      return;
    }

    guardargatos({ nombre, cantidad, categoria, id, fecha });
  };

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={Cerrarbtn} alt='cerrar modal ' onClick={OcultarModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarmodal ? 'animar' : 'cerrar'}`}
      >
        <legend>{gastoeditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto '}</legend>

        <div className='campo'>
          <label htmlFor='nombre'> Nombre Gastos</label>

          <input
            id='nombre'
            type='text'
            placeholder='Añade Nombre gatos'
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'> Cantidad </label>

          <input
            id='cantidad'
            type='text'
            placeholder='Añade Cantidad'
            value={cantidad}
            onChange={(e) => setcantidad(Number(e.target.value))}
          />
        </div>

        <div className='campo'>
          <label htmlFor='categoria'> Categoria Gasto </label>

          <select
            id='categoria'
            value={categoria}
            onChange={(e) => setcategoria(e.target.value)}
          >
            <option value=''> --Seleccione-- </option>
            <option value='ahorro'> Ahorro </option>
            <option value='comida'> comida </option>
            <option value='casa'> casa </option>
            <option value='gastos'> gastos varios </option>
            <option value='ocio'> ocio </option>
            <option value='salud'> salud </option>
            <option value='suscripciones'> suscripciones </option>
          </select>
        </div>

        <input
          type='submit'
          value={gastoeditar.nombre ? 'guardar cambios ' : ' añadir gastos '}
        />

        {mensaje2 && <Mensaje tipo='error'> {mensaje2} </Mensaje>}
      </form>
    </div>
  );
};

export default Modal;
