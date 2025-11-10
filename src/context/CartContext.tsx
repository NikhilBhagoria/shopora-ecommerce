import React, { createContext, useContext } from 'react';
import type { CartItem, Product } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';


type CartProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (prodcut : Product) => void;
    removeFromCart: (productId : string) => void;
    getCartCount: () => number;
    getCartTotal: () => number;
};

const CartContext  = createContext({} as CartContextType);

export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId: string) => {
        setCartItems((prevItems) => 
            prevItems.filter(item => item.id !== productId)
        );
    };

    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartCount, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
}