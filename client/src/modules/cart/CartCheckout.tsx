import { useState } from 'react';
import apiClient from '../../contexts/api/apiClient';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useGetSummary from "./useGetSummary";

function CartCheckout() {
    const [name, setName] = useState('');
    const summary = useGetSummary();
    // const [cartSummary, setCartSummary] = useState({
    //     numOfOrders: 0,
    //     numOfProducts: 0,
    //     totalPrice: 0
    // });
    // const fetchCartSummary = async () => (apiClient.order.getOrdersMeta());

    return(
        <Card>
            <CardContent>
                <Typography variant="h5">{summary.numOfOrders} orders</Typography>
                <Typography variant="h5">{summary.numOfProducts} products</Typography>
                <Typography variant="h6">{summary.totalPrice} Sub-total ILS234</Typography>
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
                    disabled={name === ''}
                    sx={{
                        marginLeft: "10px",
                        marginBottom: "10px"
                    }}
                > checkout </Button>
            </CardActions>
        </Card>
    );
}

export default CartCheckout
