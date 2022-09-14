



export const generarID = () => { 
  const random = Math.random().toString(36).substr(2)
  const fecha = Date.now().toString(36)

return random + fecha 

}

console.log(generarID )



export const formatearFecha = fecha => {

  const fechaActual = new Date(fecha);

  const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
  
  
  
   return   fechaActual.toLocaleDateString( "es-Es", opciones)

}