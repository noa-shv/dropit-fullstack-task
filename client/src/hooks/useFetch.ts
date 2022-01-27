import {useEffect, useState} from 'react';
import queryString from 'query-string';

function useFetch<Type, QueryParamType = void>(
    apiCallback: (queryString: string) => Promise<Array<Type>>,
    dependencies: Array<any>,
    queryParams?:  QueryParamType

) {
    const [data, setData] = useState([] as Array<Type>);
    const [isLoading, setIsLoading] = useState(true);

    const query = queryString.stringify(queryParams || {}, {
        arrayFormat: 'bracket',
        skipNull:true,
        skipEmptyString: true,
    });

    useEffect(()=>{
        apiCallback(query).then(setData).then(() => {
            setIsLoading(false);
        });
    }, dependencies);

    return { data, isLoading };
}

export default useFetch;

