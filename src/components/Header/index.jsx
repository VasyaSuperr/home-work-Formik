import { NavLink } from "react-router-dom";
import squadhelp_logo from "./squadhelp_logo.png";
import styles from "./Header.module.sass";

const authLinkStyle = ({ isActive }) => (isActive ? styles.activeAuthLink : {});
function Header() {
  return (
    <header>
      <nav className={styles.navigationList}>
        <NavLink className={styles.homeIconLink} to="/">
          <img
            className={styles.logoIcon}
            src={squadhelp_logo}
            alt="logo-icon"
          />
        </NavLink>
        <NavLink className={`${authLinkStyle} ${styles.authLink} `} to="/login">
          Login
        </NavLink>
        <NavLink className={`${styles.authLink} ${authLinkStyle}`} to="signup">
          Signup
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
