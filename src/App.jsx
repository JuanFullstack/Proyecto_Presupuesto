import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import NuevoPresupuesto from './components/NuevoPresupuesto';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import { generarID } from './helpers';
import ListadoGastos from './components/ListadoGastos';
import Filtros from './components/Filtros';

export const App = () => {
  const [presupuesto, setpresupuesto] = useState(
    Number(localStorage.getItem('presupuesto' ?? 0))
  );
  const [isValidPresupuesto, setisValidPresupuesto] = useState(false);
  const [modal, setmodal] = useState(false);
  const [animarmodal, setanimarmodal] = useState(false);

  const [gasto, setgasto] = useState(
    localStorage.getItem('gasto')
      ? JSON.parse(localStorage.getItem('gasto'))
      : []
  );

  const [gastoeditar, setgastoeditar] = useState({});
  const [filtro, setfiltro] = useState('');
  const [gastosFiltrados, setgastosFiltrados] = useState([]);

  useEffect(() => {
    localStorage.setItem('gasto', JSON.stringify(gasto) ?? []);
  }, [gasto]);

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gasto.filter(
        (gasto) => gasto.categoria === filtro
      );

      setgastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

  useEffect(() => {
    if (Object.keys(gastoeditar).length > 0) {
      console.log('tiene algo ');
      setmodal(true);

      setTimeout(() => {
        setanimarmodal(true);
      }, 500);
    }
  }, [gastoeditar]);

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto' ?? 0));

    if (presupuestoLS > 0) {
      setisValidPresupuesto(true);
    }
  }, []);

  const HandleNuevoGasto = () => {
    console.log('funciona');

    setmodal(true);
    setgastoeditar({});

    setTimeout(() => {
      setanimarmodal(true);
    }, 500);
  };
  const guardargatos = (gastoIngreso) => {
    if (gastoIngreso.id) {
      const gastoActulizado = gasto.map((GastoMap) =>
        GastoMap.id === gastoIngreso.id ? gastoIngreso : GastoMap
      );

      setgasto(gastoActulizado);
    } else {
      gastoIngreso.id = generarID();
      gastoIngreso.fecha = Date.now();
      setgasto([...gasto, gastoIngreso]);
    }
  };

  const EliminarGasto = (id) => {
    const gastosActulizados = gasto.filter((gasto) => gasto.id !== id);

    setgasto(gastosActulizados);
  };

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gasto={gasto}
        presupuesto={presupuesto}
        setpresupuesto={setpresupuesto}
        setgasto={setgasto}
        isValidPresupuesto={isValidPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Filtros filtro={filtro} setfiltro={setfiltro} />

            <ListadoGastos
              gasto={gasto}
              setgastoeditar={setgastoeditar}
              EliminarGasto={EliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>

          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto}
              alt='icono nuevo gasto'
              onClick={HandleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setmodal={setmodal}
          animarmodal={animarmodal}
          guardargatos={guardargatos}
          gastoeditar={gastoeditar}
          setgastoeditar={setgastoeditar}
        />
      )}
    </div>
  );
};

export default App;
