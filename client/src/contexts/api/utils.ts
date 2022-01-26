import {ProductQueryParams} from '../../types/product';

export function buildQueryString({categories, title, ids}: ProductQueryParams) {
    let queryString = '';
    categories?.forEach((category) => {
        queryString = queryString.concat(`&category[]=${category}`);
    })
    ids?.forEach((id) => {
        queryString = queryString.concat(`&id[]=${id}`);
    })
    if(title) {
        queryString = queryString.concat(`&title=${title}`);
    }

    return queryString;
};
