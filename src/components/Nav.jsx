import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <ul className={styles.navContainer}>
        <Link to={'/'} className={styles.list}>
          Hem
        </Link>
        <Link to={'/categories'} className={styles.list}>
          Kategorier
        </Link>
        <Link to={'/checkout'} className={styles.list}>
          Till kassan
        </Link>
      </ul>
    </>
  );
};

export default Nav;
