import { Link } from "react-router";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import styles from './CartPage.module.css';

const CartPage = () => {
  const { cartItems, getCartTotal,getCartCount  } = useCart();

  return (
    <div className={`container ${styles.cartPage}`}>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your cart is empty.</p>
          <Link to="/" className={styles.continueShoppingButton}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className={styles.cartGrid}>
          <div className={styles.cartItems}>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.cartSummary}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>
            <div className={styles.summaryLine}>
              <span>Subtotal ({getCartCount()} items)</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className={styles.summaryLine}>
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div className={`${styles.summaryLine} ${styles.summaryTotal}`}>
              <span>Total</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <button className={styles.checkoutButton}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;