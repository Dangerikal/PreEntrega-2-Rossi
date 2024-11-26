import {Link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar({title}) {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/category/Rock">Rock</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Pop">Pop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Jazz">Jazz</Link>
            </li>
          </ul>
            <form className="d-flex" role="search">
            <CartWidget cartCount={7} />
            </form>
          </div>
        </div>
      </nav>
    );
}