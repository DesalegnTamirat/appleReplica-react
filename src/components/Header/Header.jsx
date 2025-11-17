import styles from "./header.module.css";
import logoIcon from "../../assets/images/icons/logo-sm.png";
import searchIcon from "../../assets/images/icons/search-icon-sm.png";
import cartIcon from "../../assets/images/icons/cart-sm.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={`${styles.navWrapper} fixed-top`}>
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logoIcon} alt="Apple Logo" />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/mac">
                  Mac
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/iphone">
                  iphone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/ipad">
                  ipad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/watch">
                  watch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/tv">
                  tv
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/music">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/search">
                  <img src={searchIcon} alt="Search Icon" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/cart">
                  <img src={cartIcon} alt="Cart Icon" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
