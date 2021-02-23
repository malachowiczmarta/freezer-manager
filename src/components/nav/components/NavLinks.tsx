import styles from "./NavLinks.module.scss"

function NavLinks() {
  return (
    <div className={styles.navLinksContainer}>
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