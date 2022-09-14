import { useState, useEffect } from 'react';

const Filtros = ({ filtro, setfiltro }) => {
  return (
    <div className='filtros sombra contenedor '>
      <form>
        <div className='campo'>
          <label> Filtrar Gastos </label>

          <select value={filtro} onChange={(e) => setfiltro(e.target.value)}>
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
      </form>
    </div>
  );
};

export default Filtros;
