import { useParams } from "react-router-dom";
import movies from "../data";

function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>

      <p><strong>Year:</strong> {movie.year}</p>

      <p><strong>Genre:</strong> {movie.genre}</p>

      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetails;