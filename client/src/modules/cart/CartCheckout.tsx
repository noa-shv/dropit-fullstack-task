import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CartCheckout() {
    return(
        <Card>
            <CardContent>
                <Typography variant="h5">4 items</Typography>
                <Typography variant="h5">3 products</Typography>
                <Typography variant="h6">Sub-total ILS234</Typography>
                <TextField
                    size="small"
                    placeholder="your name"
                >
                </TextField>
            </CardContent>
            <Button color="primary"> checkout </Button>
        </Card>
    );
}

export default CartCheckout
