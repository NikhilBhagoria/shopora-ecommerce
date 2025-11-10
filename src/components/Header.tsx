import { Link, NavLink } from 'react-router';
import { useCart } from '../context/CartContext';
import styles from './Header.module.css';

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={styles.cartIcon}
  >
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);


const Header = () => {
    const {getCartCount} = useCart();
    const cartCount = getCartCount();
  return (
     <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            Shopora
          </Link>
          <nav>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              <CartIcon />
              <span className={styles.cartText}>Cart</span>
              {cartCount > 0 && <span className={styles.cartCount} data-cy="cart-count">{cartCount}</span>}
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header