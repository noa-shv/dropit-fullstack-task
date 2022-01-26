import api from '../../contexts/api';
import {buildQueryString} from "../../contexts/api";
import {Order, OrderProduct} from "../../types/orders";
import {useEffect, useState} from "react";

export default (orders: Array<Order>): Array<OrderProduct> => {
    let[orderProducts, setOrderProducts] = useState([] as any[]);
    const productIds = orders.map(order => order.productId);

    const matchProductsToOrders = async(): Promise<void> => {
        const queryString = buildQueryString({ids: productIds});
        const products = await api.product.getAll(queryString);
        let orderProductsArray: Array<OrderProduct> = [];
        orders.forEach((order) => {
            const product = products.find(product => product.id === order.productId);
            orderProductsArray.push({ ...product, amount: order.amount} as OrderProduct);
        });
        setOrderProducts(orderProductsArray);
    };

    useEffect(() => {
        if(productIds.length > 0) {
            matchProductsToOrders();
        }
    }, [])

    return orderProducts;
}
