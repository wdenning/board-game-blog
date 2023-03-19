import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        WILL.DNG
      </a>
      <ul className={styles.navContainer}>
        <li className={styles.navItem} href="/about">
          About
        </li>
        <li className={styles.navItem} href="https://github.com/wdenning">
          Github
        </li>
      </ul>
    </header>
  );
}

export default Header;
