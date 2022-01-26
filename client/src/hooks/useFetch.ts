import {useEffect, useState} from 'react';
import {buildQueryString} from '../contexts/api';
import {ProductQueryParams} from '../types/product';

function useFetch (apiCallback: (queryString: string) => any, dependencies: Array<unknown>, queryParams?:  ProductQueryParams) {
    const [data, setData] = useState([] as any[]);
    const [isLoading, setIsLoading] = useState(true);

    const queryString = queryParams? buildQueryString(queryParams) : '';

    useEffect(()=>{
        apiCallback(queryString).then(setData).then(() => {
            setIsLoading(false);
        });
    }, dependencies);

    return { data, isLoading };
}

export default useFetch;

