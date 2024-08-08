import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-info">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img
              style={{ width: "60px", padding: "3px" }}
              src="https://i.imgur.com/juL1aAc.png"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link active" to="/User">
                  Users
                </Link>
              </li>

              <>
                <li class="nav-item">
                  <Link class="nav-link active" to="/">
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/register">
                    Register
                  </Link>
                </li>
              </>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
