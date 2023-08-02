import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  ////useEffect(() => {
  // el useEffect lo usamos para fines demostrativos
  //verificamos el dato que viene de la url
  //console.log(searchParams);
  // tiene varios Prototype para acceder a cierta informacion
  // se puede trabajar con querys representados por el signo de interrogación ?
  // ejemplo localhost:5173/blog?name=prueba
  // en este caso nos permite capturar el campo "name" en el presente componente Blog

  //console.log(searchParams.get("name"));
  // obtiene la query del campo "name", cuyo valor es prueba
  // las "querys" se usan para realizar filtros en páginas web

  ////  setSearchParams({ filter: "prueba" }); // esta sentencia agrega ?filter=prueba a la url
  // en este caso la url queda como localhost:5173/blog?filter=ignacio
  // entonces el setSearchParams permite modificar la "query" que aparece en la url
  //// }, [searchParams]);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  const handleChange = (e) => {
    let filter = e.target.value;
    //setSearchParams({ filter: filter }); // asignamos a "filter" el valor que el usuario escribio en el input
    // usando una validacion sencilla

    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }

    //console.log('e.target.value')
    //console.log("change");
  };

  /*  if (error === null)
    return (
      <>
        <p>error...</p>
        <Link to="/" className="btn btn-dark">
          Volver al Inicio
        </Link>
      </>
    ); */

  return (
    <>
      <h1>Blog</h1>
      <input
        type="text"
        onChange={handleChange}
        className="form-control my-3"
        value={searchParams.get("filter") || ""}
      />
      <ul className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Link
              to={`/blog/${item.id}`}
              key={item.id}
              className="list-group-item"
            >
              {item.id} - {item.title}
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Blog;
