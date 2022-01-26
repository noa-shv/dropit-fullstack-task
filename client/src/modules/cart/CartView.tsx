import CartTable from './CartTable';
import {Grid} from '@mui/material';
import CartCheckout from './CartCheckout';
import {useSelector} from "react-redux";
import {RootState} from '../../store/reducers';
import useGetOrderProducts from "./useGetOrderProducts";

function CartView() {
    const orders = useSelector((state: RootState) => state.orders);
    const {orderProducts} = useGetOrderProducts(orders);
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={7}>
               <CartTable orderProducts={orderProducts}/>
            </Grid>
            <Grid item xs={3}>
                <CartCheckout orderProducts={orderProducts}/>
            </Grid>
        </Grid>
    );
}

export default CartView;
