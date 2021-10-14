import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ShoppingDocument } from '../model/Shopping';
import { ProductDocument } from '../model/Product';
import { ApiConf } from './ApiConf';

axios.defaults.baseURL = ApiConf.url;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string, config?: AxiosRequestConfig | undefined) =>
    axios.get<T>(url, config).then(responseBody),
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig | undefined) =>
    axios.post<T>(url, data, config).then(responseBody),
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig | undefined) =>
    axios.put<T>(url, data, config).then(responseBody),
  delete: <T>(url: string, config?: AxiosRequestConfig | undefined) =>
    axios.delete<T>(url, config).then(responseBody),
};

const Shopping = {
  getAll: () => requests.get<ShoppingDocument[]>('/shopping'),
  add: (shopping: ShoppingDocument) =>
    requests.post<ShoppingDocument>('/shopping', shopping),
};

const Products = {
  search: (query: string) =>
    requests.get<ProductDocument[]>(`/products/search/${query}`),
  getRecents: () => requests.get<ProductDocument[]>('/products/recent'),
};

const API = { Shopping, Products };

export default API;
