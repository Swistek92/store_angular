import { Category } from '../types/category.type';

export const categories: Category[] = [
  {
    id: 1,
    category: 'Men',
    parent_category_id: null,
  },
  {
    id: 2,
    category: 'Women',
    parent_category_id: null,
  },
  {
    id: 3,
    category: 'Kids',
    parent_category_id: null,
  },
  {
    id: 4,
    category: 'Casual Wear',
    parent_category_id: 1,
  },
  {
    id: 5,
    category: 'Party Wear',
    parent_category_id: 2,
  },
  {
    id: 6,
    category: 'Foot Wear',
    parent_category_id: 2,
  },
  {
    id: 7,
    category: 'Accessories',
    parent_category_id: 3,
  },
];
