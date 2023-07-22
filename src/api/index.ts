import axios, { AxiosResponse } from 'axios';
import { ProductsType, ProductType } from 'src/models';
const { REACT_APP_API_ROUTE } = process.env

const instance = axios.create({
  baseURL: REACT_APP_API_ROUTE,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Products = {
  getProducts: (url: string): Promise<ProductsType> => requests.get(url),
  getAProduct: (id: number): Promise<ProductType> => requests.get(`products/${id}`),
  createProduct: (post: ProductType): Promise<ProductType> =>
    requests.post('products/add', post),
  updateProduct: (post: ProductType, id: number): Promise<ProductType> =>
    requests.put(`products/${id}`, post),
  deleteProduct: (id: number): Promise<void> => requests.delete(`products/${id}`),
};