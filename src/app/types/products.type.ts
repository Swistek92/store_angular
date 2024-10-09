export type Product = {
  id: number;
  product_name: string;
  product_description: string | null;
  price: string;
  ratings: number;
  category_id: number | null;
  product_img: string;
  keywords: string[];
};
