 import { Link } from 'react-router-dom';
 
 export const Navbar =()=>{
    return(
        <nav className="navbar navbar-expand-lg" id="nav-bar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i
            className="fa-solid fa-mug-saucer fa-beat fa-xl"
            style={{ color: "#C5A059", marginRight: "10px" }}
          ></i>
          <span>Coffee Cafe</span>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <label
            className="burger"
            htmlFor="burger"
            style={{ marginBottom: 0, cursor: "pointer" }}
          >
            <input type="checkbox" id="burger" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Atmosphere</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">Our Story</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );


}
