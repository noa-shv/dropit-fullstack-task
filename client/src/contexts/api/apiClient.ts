import Axios from 'axios';
import {Product} from '../../types/product';

const AxiosClient = Axios.create({
    baseURL: 'http://localhost:8080',
});

// TODO: add product types
export default {
    // TODO: add filters
    product: {
        getAll: async (queryString?: string): Promise<Product[]> =>
            AxiosClient.get<any[]>(`/products?${queryString}`).then(
                (res) => res.data
            ),
    },
    category: {
        getAll: async (): Promise<string[]> =>
            AxiosClient.get<string[]>(`/categories`).then(
                (res) => res.data
            ),
    }
}
