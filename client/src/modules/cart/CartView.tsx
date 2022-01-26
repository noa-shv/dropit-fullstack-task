import CartTable from './CartTable';
import {Grid} from '@mui/material';
import CartCheckout from './CartCheckout';
import {useSelector} from "react-redux";
import {RootState} from '../../store/reducers';
import useGetOrderProducts from './useGetOrderProducts';
import Loading from '../../components/Loading';
import api from '../../contexts/api';
import {useState} from "react";

function CartView() {
    const orders = useSelector((state: RootState) => state.orders);
    const {orderProducts, isLoading, setIsLoading} = useGetOrderProducts(orders);
    const [isCheckedOut, setIsCheckedOut] = useState(false);

    const checkout = async (name: string) => {
        setIsLoading(true);
        await api.checkout.checkoutCart({name, orders});
        setIsLoading(false);
        setIsCheckedOut(true)
    }
    return (
        <div>
            <Loading isVisible={isLoading}/>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={7}>
                   <CartTable orderProducts={orderProducts}/>
                </Grid>
                <Grid item xs={3}>
                    <CartCheckout
                        orderProducts={orderProducts}
                        handleCheckout={checkout}
                        isCheckoutCompleted={isCheckedOut}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default CartView;
