import {useEffect, useState} from "react";

import api from '../contexts/api';

interface QueryParams {
    categories?: Array<string>;
    title?: string;
}

function buildQueryString({categories, title}: QueryParams) {
    let queryString = '';
    categories?.forEach((category) => {
        queryString = queryString.concat(`&category[]=${category}`);
    })
    if(title) {
        queryString = queryString.concat(`&title=${title}`);
    }

    return queryString;
};

function useFetch (entity: keyof typeof api, dependencies: Array<unknown>, queryParams?:  QueryParams) {
    let[data, setData] = useState([] as any[]);

    const queryString = queryParams? buildQueryString(queryParams) : '';

    useEffect(()=>{
        api[entity].getAll(queryString).then(setData);
    }, dependencies);

    return {
        data,
        setData
    }
}

export default useFetch;

