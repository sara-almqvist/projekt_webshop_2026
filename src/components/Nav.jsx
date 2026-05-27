import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import { FolderHeart } from 'lucide-react';
import FavoriteSymbol from './FavoriteSymbol';

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
        <Link to={'/favorites'} className={styles.list}>
          <FavoriteSymbol />
        </Link>
        <Link to={'/checkout'} className={styles.list}>
          Till kassan
        </Link>
      </ul>
    </>
  );
};

export default Nav;
