export type ProductData = {
  products: Product[];
};

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: string; count: number };
  title: string;
};