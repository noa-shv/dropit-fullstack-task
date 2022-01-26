import {useEffect, useState} from "react";

interface OrdersSummary {
    numOfOrders: number;
    numOfProducts: number;
    totalPrice: number;
}

function useGetSummary(orderProducts: Array<any>): OrdersSummary {
    let[summary, setSummary] = useState({} as OrdersSummary);

    let sum = {
        numOfOrders: 0,
        numOfProducts: 0,
        totalPrice: 0
    }
    useEffect(() => {
        orderProducts.forEach((orderProduct) => {
            sum.numOfOrders += orderProduct.amount;
            sum.totalPrice += orderProduct.price * orderProduct.amount;
            sum.numOfProducts ++;
        });
        setSummary(sum);
    }, [orderProducts]);

    return summary;
}

export default useGetSummary;
