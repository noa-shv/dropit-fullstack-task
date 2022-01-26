import api from '../../contexts/api';
import {buildQueryString} from "../../hooks/useFetch";
import {Order} from "../../store/types";
import {useEffect, useState} from "react";

export default (orders: Array<Order>) => {
    let[orderProducts, setOrderProducts] = useState([] as any[]);
    const productIds = orders.map(order => order.productId);

    const matchProductToOrder = async(): Promise<void> => {
        const queryString = buildQueryString({ids: productIds});
        const products = await api.product.getAll(queryString);
        orders.forEach((order) => {
            let productToEdit = products.find(product => product.id == order.productId);
            productToEdit.amount = order.amount;
        });
        setOrderProducts(products);
    };

    useEffect(() => {
        if(productIds.length > 0) {
            matchProductToOrder();
        }
    }, [])

    return {orderProducts};
}
