import { race } from 'rxjs';
import { ProductListItem } from '../types/products.type';

export const products: ProductListItem[] = [
  {
    id: 1,
    product_name: 'Jacket',
    product_img: '/assets/imgs/1.jpg',
    price: 100,
    ratings: 4.5,
  },
  {
    id: 2,
    product_name: 'Purse',
    product_img: '/assets/imgs/2.jpg',
    price: 25,
    ratings: 3,
  },
  {
    id: 3,
    product_name: 'Dress',
    product_img: '/assets/imgs/3.jpg',
    price: 45,
    ratings: 4,
  },
  {
    id: 4,
    product_name: 'Denim Jeans',
    product_img: '/assets/imgs/4.jpg',
    price: 50,
    ratings: 3.5,
  },
  {
    id: 5,
    product_name: 'Laced Boots',
    product_img: '/assets/imgs/5.jpg',
    price: 65,
    ratings: 2,
  },
  {
    id: 6,
    product_name: 'Back pack',
    product_img: '/assets/imgs/6.jpg',
    price: 20,
    ratings: 5,
  },
];
