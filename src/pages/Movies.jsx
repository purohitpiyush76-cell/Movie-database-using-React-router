import movies from "../data";
import MovieCard from "../components/MovieCard";

function Movies() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Movies</h1>

      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;