import Axios from 'axios';

const AxiosClient = Axios.create({
    baseURL: 'http://localhost:8080',
});

// TODO: add product types
export default {
    // TODO: add filters
    product: {
        getAll: async (queryString?: string): Promise<any[]> =>
            AxiosClient.get<any[]>(`/products?${queryString}`).then(
                (res) => res.data
            ),
    },
    category: {
        getAll: async (): Promise<string[]> =>
            AxiosClient.get<string[]>(`/categories`).then(
                (res) => res.data
            ),
    },
    order: {
        create: async (productId: string): Promise<any[]> =>
            AxiosClient.post<any[]>(`/createOrder`, {"id": productId}).then(
                (res) => res.data
            ),
        getAll: async (): Promise<any[]> =>
            AxiosClient.get<any[]>(`/orders`).then(
                (res) => res.data
            ),
        countOrders: async(): Promise<any[]> =>
            AxiosClient.get<any[]>(`/orders/number`).then(
                (res) => res.data
            ),
        getOrdersMeta: async(): Promise<any[]> => {
            const {data} = await  AxiosClient.get<any[]>(`/orders/meta`);
            return data;
        }
        // getOrders: async (): Promise<any[]> =>
        //     AxiosClient.get<any[]>(`/orders`).then(
        //         (res) => res.data
        //     ),
        // getOrdersNumber: async (): Promise<any[]> =>
        //     AxiosClient.get<any[]>(`/orders`).then(
        //         (res) => res.data
        //     ),
    }
}
