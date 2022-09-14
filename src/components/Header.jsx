import ControlPresupuesto from './ControlPresupuesto';
import NuevoPresupuesto from './NuevoPresupuesto';

const Header = ({
  gasto,
  setgasto,
  presupuesto,
  setpresupuesto,
  isValidPresupuesto,
  setisValidPresupuesto,
}) => {
  return (
    <>
      <header>
        <h1> Planificador de gastos </h1>

        {isValidPresupuesto ? (
          <ControlPresupuesto
            gasto={gasto}
            presupuesto={presupuesto}
            setgasto={setgasto}
            setpresupuesto={setpresupuesto}
            setisValidPresupuesto={setisValidPresupuesto}
          />
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setpresupuesto={setpresupuesto}
            setisValidPresupuesto={setisValidPresupuesto}
          />
        )}
      </header>
    </>
  );
};

export default Header;
