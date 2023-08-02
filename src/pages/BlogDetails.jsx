import { useParams, Link } from "react-router-dom"; // para recibir parametros
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
  const params = useParams();
  //console.log(params.id);
  // envia un objeto, el nombre es el que pusimos en el path de BlogDetails en App
  // en este caso params = {id: '23'}
  //console.log(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
      <Link to="/blog" className="btn btn-dark">
        Volver
      </Link>
    </>
  );
};

export default BlogDetails;
