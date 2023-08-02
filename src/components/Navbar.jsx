import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
// NavLink agrega una clase "active" a los botones de navegacion (la clase tambien la tiene bootstrap)
// esa clase hace que el elemento se vea seleccionado
// colocando un color de fondo distintivo al boton que se le dio click
// para que el usuario sepa la sección de la pagina que esta visitando

const Navbar = () => {
  return (
    // por cada click en los enlaces hace un refresh que realiza automaticamente el navegador
    // el navegador tiene un api de navegacion para ir a diferentes rutas, en este caso va a la ruta de inicio
    // para ello cambiamos el href para diferenciar las rutas
    // como rendimiento y experiencia de usuario no es optimo porque todo se vuelve a cargar
    //  en SPA todo la aplicacion de React se renderiza en el root (que esta en el index.html)
    //  spa = simple page application
    // etiqueta a se le llama "ancla"
    // Link permite realizar enrutamiento de manera sencilla
    // la propiedad "to" equivale al "href" de la etiqueta html a
    // con Link la pagina ya no se crea por cada acceso a las paginas "Inicio", "Contacto" o "Blog"
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="btn btn-outline-primary" to="/">
          Inicio
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/contacto">
          Contacto
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/blog">
          Blog
        </NavLink>

        {/* <a href="/" className="btn btn-outline-primary">
          Inicio
        </a>
        <a href="/nosotros" className="btn btn-outline-primary">
          Nosotros
        </a>
        <a href="/contacto" className="btn btn-outline-primary">
          Contacto
        </a>
        <a href="/blog" className="btn btn-outline-primary">
          Blog
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
