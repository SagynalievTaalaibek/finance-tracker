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

export interface Transaction {
  type: string;
  name: string;
  amount: number;
  date: string;
}
export interface TransactionMutation extends Category {
  amount: string;
}

export interface ApiTransaction {
  id: string;
  type: string;
  name: string;
  amount: number;
  date: string;
}

export interface ApiListTransaction {
  [key: string]: Transaction;
}