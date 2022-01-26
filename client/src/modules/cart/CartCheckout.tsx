import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useGetSummary from "./useGetSummary";

function CheckoutCompleted({isVisible}: {isVisible: boolean}) {
    return isVisible? (
        <Typography> Thank you for your purchase! </Typography>
    ): (
        <div />
    );
}

interface Props {
    orderProducts: Array<any>;
    handleCheckout: (name: string) => void;
    isCheckoutCompleted: boolean;
}

function CartCheckout({orderProducts, handleCheckout, isCheckoutCompleted}: Props) {
    const [name, setName] = useState('');
    const summary = useGetSummary(orderProducts);

    return(
        <Card>
            <CardContent>
                <Typography variant="h5">{summary.numOfOrders} orders</Typography>
                <Typography variant="h5">{summary.numOfProducts} products</Typography>
                <Typography variant="h6">Sub-total ILS{summary.totalPrice}</Typography>
                <TextField
                    size="small"
                    placeholder="your name"
                    helperText="enter name to checkout"
                    sx={{
                        marginTop: "30px"
                    }}
                    onChange={
                        (event)=>{setName(event.target.value)}
                    }
                >
                </TextField>
            </CardContent>
            <CardActions>
                <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    disabled={name === '' || orderProducts.length === 0}
                    onClick={() => handleCheckout(name)}
                    sx={{
                        marginLeft: "10px",
                        marginBottom: "10px"
                    }}
                > checkout </Button>
            </CardActions>
            <CheckoutCompleted isVisible={isCheckoutCompleted}/>
        </Card>
    );
}

export default CartCheckout
