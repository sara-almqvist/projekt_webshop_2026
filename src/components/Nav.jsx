import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import CartSymbol from './CartSymbol';

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
        <Link to={'/about'} className={styles.list}>
          Om oss
        </Link>
        <Link to={'/checkout'} className={styles.list}>
          Till kassan
        </Link>
      </ul>
    </>
  );
};

export default Nav;
