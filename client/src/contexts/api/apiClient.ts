import Axios from 'axios';
import {Product} from '../../types/product';
import {Order, Checkout} from '../../types/orders';

const AxiosClient = Axios.create({
    baseURL: 'http://localhost:8080',
});

export default {
    product: {
        getAll: async (queryString?: string): Promise<Product[]> =>
            AxiosClient.get<Product[]>(`/products?${queryString}`).then(
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
}
