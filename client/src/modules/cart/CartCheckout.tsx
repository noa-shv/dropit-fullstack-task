import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CartCheckout() {
    const [name, setName] = useState('');
    return(
        <Card>
            <CardContent>
                <Typography variant="h5">4 items</Typography>
                <Typography variant="h5">3 products</Typography>
                <Typography variant="h6">Sub-total ILS234</Typography>
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
