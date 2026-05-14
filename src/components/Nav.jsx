import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import useCart from './useCart';

const Nav = () => {
  const { cart } = useCart();
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
        <Link to={'/cart'} className={styles.list}>
          <p style={{ alignSelf: 'center' }}>{cart.length}</p>
        </Link>
      </ul>
    </>
  );
};

export default Nav;
