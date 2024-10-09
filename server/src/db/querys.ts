class Querys {
  getAllCategories(): string {
    return 'select * from categories';
  }

  getAllProducts(): string {
    return 'select * from products';
  }

  findProductById(id: number): string {
    return `select * from products where id = ${id}`;
  }

  findProductsByMainCategoryId(mainCategoryId: number): string {
    return `select products.* from products, categories 
            where products.category_id = categories.id 
            and categories.parent_category_id = ${mainCategoryId}`;
  }

  findProductsBySubCategoryId(subCategoryId: number): string {
    return `select * from products where category_id = ${subCategoryId}`;
  }
  addKeywordFilter(query: string, keyword: string): string {
    const dangerousCharsRegex = /['"\\;=<>\/\(\)\*\-\+`]/;

    if (dangerousCharsRegex.test(keyword)) {
      console.warn('dangerous chars ', keyword);
      return query;
    }
    console.log(keyword);
    const updatedQuery = `${query} AND keywords LIKE '%${keyword}%'`;
    return updatedQuery;
  }
}

export default Querys;
