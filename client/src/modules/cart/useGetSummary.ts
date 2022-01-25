import api from "../../contexts/api";
import {useEffect, useState} from "react";

interface OrdersSummary {
    numOfOrders: number;
    numOfProducts: number;
    totalPrice: number;
}

function useGetSummary(): OrdersSummary {
    let[summary, setSummary] = useState([] as any[]);

    useEffect(()=>{
        api.order.getOrdersMeta().then(setSummary);
    }, []);

    // @ts-ignore
    return summary;
}

export default useGetSummary;
