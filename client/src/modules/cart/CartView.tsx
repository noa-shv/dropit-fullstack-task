import CartTable from './CartTable';
import {Grid} from '@mui/material';
import CartCheckout from './CartCheckout';
import useFetch from '../../hooks/useFetch';
import {apiEntity} from '../../contexts/api';
import {useSelector} from "react-redux";
import {RootState} from '../../store/reducers';
import useGetOrderProducts from "./useGetOrderProducts";

function CartView() {
    const ord = useSelector((state: RootState) => state.orders.orders);
    const {orderProducts} = useGetOrderProducts(ord);
    // const {data: order}
    // const { data: orders } = useFetch(apiEntity.order, []);
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={7}>
               <CartTable orders={orderProducts}/>
            </Grid>
            <Grid item xs={3}>
                <CartCheckout />
            </Grid>
        </Grid>
    );
}

export default CartView;
