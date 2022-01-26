import {useEffect, useState} from 'react';
import {buildQueryString} from '../contexts/api';
import {ProductQueryParams} from '../types/product';

function useFetch (apiCallback: (queryString: string) => any, dependencies: Array<unknown>, queryParams?:  ProductQueryParams) {
    let[data, setData] = useState([] as any[]);

    const queryString = queryParams? buildQueryString(queryParams) : '';

    useEffect(()=>{
        apiCallback(queryString).then(setData);
    }, dependencies);

    return { data };
}

export default useFetch;

