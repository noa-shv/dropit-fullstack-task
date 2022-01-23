import {useEffect} from "react";
import CartTable from './CartTable';
import {Grid} from '@mui/material';
import CartCheckout from './CartCheckout';
import useFetch from '../../hooks/useFetch';
import {apiEntity} from '../../contexts/api';

function CartView() {
    const { data: orders } = useFetch(apiEntity.order, []);
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={7}>
               <CartTable orders={orders}/>
            </Grid>
            <Grid item xs={3}>
                <CartCheckout />
            </Grid>
        </Grid>
    );
}

export default CartView;
