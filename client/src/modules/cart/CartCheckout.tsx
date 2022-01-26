import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useGetSummary from "./useGetSummary";

interface Props {
    orderProducts: Array<any>
}

function CartCheckout({orderProducts}: Props) {
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
