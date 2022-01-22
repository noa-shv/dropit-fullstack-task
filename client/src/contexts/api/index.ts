import Axios from 'axios';

const AxiosClient = Axios.create({
    baseURL: 'http://localhost:8080',
});

export default {
    product: {
        getAll: async (): Promise<any[]> =>
            AxiosClient.get<any[]>(`/products`).then(
                (res) => res.data
            ),
    }
}
