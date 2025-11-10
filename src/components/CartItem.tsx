import { useCart } from '../context/CartContext';
import type { CartItem as CartItemType } from '../types';
import styles from './CartItem.module.css';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.title} className={styles.itemImage} />
      <div className={styles.itemDetails}>
        <h3 className={styles.itemTitle}>{item.title}</h3>
        <p className={styles.itemPrice}>
          ${item.price.toFixed(2)} x {item.quantity}
        </p>
      </div>
      <button onClick={() => removeFromCart(item.id)} className={styles.removeButton} data-cy="remove-from-cart-button">Remove</button>
    </div>
  );
};

export default CartItem;