import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LayoutPublic from "./layouts/LayoutPublic";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <h1>App</h1> */}

      {/* element es la pagina web y path es la ruta de esa pagina 
      en este caso son componentes
      en la versión 5 de Router React, los routes se conocian como Switch*/}

      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          {/* aqui pasamos un Layout en lugar de una pagina */}
          {/* esto concepto se llama rutas anidadas y todas pertenecen al div contenedor*/}
          <Route element={<Inicio />} path="/"></Route>
          {/* se puede expresar tambien como <Route element={<Inicio />} index></Route> */}
          <Route element={<Contacto />} path="/contacto"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<BlogDetails />} path="/blog/:id"></Route>
          {/* pasamos parametro id a modo de variable */}
          <Route element={<NotFound />} path="*"></Route>
          {/* el asterisco significa cualquier ruta que no tengamos configurada */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
