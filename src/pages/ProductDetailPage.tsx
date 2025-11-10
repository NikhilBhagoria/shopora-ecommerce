import { Link, useParams } from "react-router";
import { getProductById } from "../services/api";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import type { Product } from "../types";
import styles from './ProductDetailPage.module.css';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();



  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const data = await getProductById(id);
        setProduct(data);
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div className={styles.breadcrumb}>
        <Link to="/">Home</Link> / <span>{product.title}</span>
      </div>
      <div className={styles.productDetail}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} className={styles.productImage} />
        </div>
        <div className={styles.productInfo}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <p className={styles.description}>{product.description}</p>
          <button onClick={() => addToCart(product)} className={styles.addToCartButton}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;