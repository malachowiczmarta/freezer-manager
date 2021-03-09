import { Link } from "react-router-dom";
import styles from "./NavLinks.module.scss"

function NavLinks() {
  return (
    <div className={styles.navLinksContainer}>
        <div className={styles.wrapper}>
          <Link to="/">Home</Link>
          <Link to="/myfreezer">My freezer</Link>
        </div>
        <button>login</button>
    </div>
  );
}

export default NavLinks;