import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#333" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>

      <Link to="/movies" style={{ color: "white" }}>
        Movies
      </Link>
    </nav>
  );
}

export default Navbar;