import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import FavoriteSymbol from './FavoriteSymbol';
import AdminUser from './AdminUser';

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
        <div className="flex flex-row justify-between gap-4">
          <Link to={'/favorites'} className={styles.list}>
            <FavoriteSymbol />
          </Link>
          <Link to={'/user'} className={styles.list}>
            <AdminUser />
          </Link>
        </div>
      </ul>
    </>
  );
};

export default Nav;
