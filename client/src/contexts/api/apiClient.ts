import Axios from 'axios';
import {Product, ProductDetails} from '../../types/product';
import {Checkout} from '../../types/orders';

const AxiosClient = Axios.create({
    baseURL: 'http://localhost:8080',
});

const apiClient = {
    product: {
        getAll: async (queryString?: string): Promise<Product[]> =>
            AxiosClient.get<Product[]>(`/products?${queryString}`).then(
                (res) => res.data
            ),
        find: async (id: string | undefined): Promise<ProductDetails> =>
            AxiosClient.get<ProductDetails>(`/product/${id}`).then(
                (res) => res.data
            ),
    },
    category: {
        getAll: async (): Promise<string[]> =>
            AxiosClient.get<string[]>(`/categories`).then(
                (res) => res.data
            ),
    },
    checkout: {
        checkoutCart: async(checkout: Checkout): Promise<void> =>
            AxiosClient.post('/checkout', checkout)
    }
};

export default apiClient;
