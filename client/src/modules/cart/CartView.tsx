import CartTable from './CartTable';
import {Grid} from '@mui/material';
import CartCheckout from './CartCheckout';

function CartView() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={7}>
               <CartTable />
            </Grid>
            <Grid item xs={5}>
                <CartCheckout />
            </Grid>
        </Grid>
    );
}

export default CartView;
