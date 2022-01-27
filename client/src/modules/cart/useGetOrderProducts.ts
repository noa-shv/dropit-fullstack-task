import api from '../../contexts/api';
import {Order, OrderProduct} from "../../types/orders";
import {useEffect, useState} from "react";
import queryString from 'query-string';

interface UseGetOrderProducts {
    orderProducts: Array<OrderProduct>;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

export default (orders: Array<Order>): UseGetOrderProducts => {
    const [orderProducts, setOrderProducts] = useState([] as Array<OrderProduct>);
    const [isLoading, setIsLoading] = useState(true);
    const productIds = orders.map(order => order.productId);

    const matchProductsToOrders = async(): Promise<void> => {
        const query = queryString.stringify({id: productIds}, {
            arrayFormat: 'bracket',
            skipNull:true,
            skipEmptyString: true,
        });
        const products = await api.product.getAll(query);
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
        setIsLoading(false);
    }, [])

    return {orderProducts, isLoading, setIsLoading};
}
