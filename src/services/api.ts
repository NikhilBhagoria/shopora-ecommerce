import axios from "axios";
import type { Product } from "../types";

const API_URL = 'https://fakestoreapi.com';

export const getProducts = async (category?: string): Promise<Product[]> => {
    try {
        const url = category ? `${API_URL}/products/category/${category}` : `${API_URL}/products`;
        const response = await axios.get(url);
        return response.data;
        
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const getProductById = async (id: number): Promise<Product | null> => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        return null;
    }
};

export const getCategories = async (): Promise<string[]> => {
    try {
        const response = await axios.get(`${API_URL}/products/categories`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};