export interface Category {
  type: string;
  name: string;
}

export interface ApiCategory {
  id: string;
  type: string;
  name: string;
}

export interface ApiCategoryList {
  [key: string]: Category;
}