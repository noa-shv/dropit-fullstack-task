import api from '../contexts/api';
import {useGet} from './useFetch';
import {ProductQueryParams} from '../types/product'

export default function useGetProducts(dependencies: Array<unknown>, queryParams?:  ProductQueryParams) {
    return useGet(api.product.getAll, dependencies, queryParams);
}
