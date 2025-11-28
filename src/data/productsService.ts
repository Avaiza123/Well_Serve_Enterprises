// src/services/ProductService.ts
import productsDataJson from "./products.json";
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
}

// Type cast JSON to Product[]
const productsData: Product[] = productsDataJson as Product[];

export const ProductService = {
  getProducts: (): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(productsData), 300); // simulate async
    });
  }
};
