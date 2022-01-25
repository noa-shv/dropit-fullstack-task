import api from '../../contexts/api';
import {useGet, buildQueryString} from "../../hooks/useFetch";
import {ProductQueryParams} from '../../types/product';
import {Order} from "../../store/types";
import {useEffect, useState} from "react";

export default (orders: Array<Order>) => {
    let[orderProducts, setOrderProducts] = useState([] as any[]);
    const productIds = orders.map(order => order.productId);
    const queryString = buildQueryString({ids: productIds})

    useEffect(()=>{
        api.product.getAll(queryString).then((products) => {
            orders.forEach((order) => {
                let productToEdit = products.find(product => product.id == order.productId);
                productToEdit.numOfOrders = order.amount;
            });
            setOrderProducts(products);
        })
    }, [])

    return {orderProducts};
    // const {data: orderProducts } = useGet(api.product.getAll, [], {ids: productIds});
}
