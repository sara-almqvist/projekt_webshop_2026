import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <ul className={styles.navContainer}>
        <li className={styles.list}>Hem</li>
        <li className={styles.list}>Kategorier</li>
        <li className={styles.list}>Om oss</li>
        <li className={styles.list}>Till kassan</li>
      </ul>
    </>
  );
};

export default Nav;
