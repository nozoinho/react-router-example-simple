import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div className="container">
      <Outlet />
      {/* Outlet sirve para identificar todas las rutas anidadas que se encuentren
      centralizadas en este componente 
      aqui se visualizaran las paginas anidadas que se relacionen
      con el element LayoutPublic
      Inicio, Contacto y Blog se visualizaran en este bloque*/}
      <footer>Este es el footer</footer>
    </div>
  );
};

export default LayoutPublic;
