import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px"
      }}
    >
      <h2>{movie.title}</h2>

      <p>{movie.genre}</p>

      <Link to={`/movies/${movie.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default MovieCard;