import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        WILL.DNG
      </a>
      <ul className={styles.navContainer}>
        <li className={styles.navItem}>
          <a href="/about">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://github.com/wdenning">Github</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
