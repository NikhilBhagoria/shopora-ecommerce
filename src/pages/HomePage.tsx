import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getCategories, getProducts } from "../services/api";
import { useSearchParams } from "react-router";
import type { Product } from "../types";
import styles from './HomePage.module.css';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const category = searchParams.get('category');
      const data = await getProducts(category || undefined);
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, [searchParams]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="container">
      <div className={styles.filterContainer}>
        <select onChange={handleCategoryChange} value={searchParams.get('category') || ''} className={styles.filterSelect}>
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <div className={styles.loading}>Loading products...</div>
      ) : (
        <div className={styles.productGrid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;