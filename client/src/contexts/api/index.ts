import Axios from 'axios';

const AxiosClient = Axios.create({
    baseURL: 'http://localhost:8080',
});

// TODO: add product types
export default {
    product: {
        getAll: async (): Promise<any[]> =>
            AxiosClient.get<any[]>(`/products`).then(
                (res) => res.data
            ),
    },
    category: {
        getAll: async (): Promise<string[]> =>
            AxiosClient.get<string[]>(`/categories`).then(
                (res) => res.data
            ),
    },
}
