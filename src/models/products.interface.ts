export interface ProductType {
  id?: number,
  title: string,
}

export interface ProductsType {
  products: ProductType[],
}