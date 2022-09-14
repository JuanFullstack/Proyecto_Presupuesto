import React from 'react';
import MostrarGasto from './MostrarGasto';

const ListadoGastos = ({
  gasto,
  setgastoeditar,
  EliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  const filtrado = gastosFiltrados.map((gasto) => (
    <MostrarGasto
      key={gasto.id}
      gasto={gasto}
      setgastoeditar={setgastoeditar}
      EliminarGasto={EliminarGasto}
    />
  ));

  const gastosgral = gasto.map((gasto) => (
    <MostrarGasto
      key={gasto.id}
      gasto={gasto}
      setgastoeditar={setgastoeditar}
      EliminarGasto={EliminarGasto}
    />
  ));

  const TituloSiHayFiltro = gastosFiltrados.length
    ? 'Resultado Filtrado : ' + filtro
    : ' No hay gastos en esta categoria ';
  const Titulogral = gasto.length
    ? 'Todos los gatos :'
    : 'No hay gastos registrados ';

  return (
    <div className='listado-gatos contenedor'>
      <h2> {filtro ? TituloSiHayFiltro : Titulogral} </h2>

      {filtro ? filtrado : gastosgral}
    </div>
  );
};

export default ListadoGastos;
