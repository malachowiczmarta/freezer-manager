import styles from "./Nav.module.scss";

function NavLinks() {
  return (
    <div className={styles.navLinksMobile}>
        <ul>
          <li>Home</li>
          <li>My freezer</li>
          <li>Freezer guide</li>
        </ul>
        <button>login</button>
      </div>
  );
}

export default NavLinks;