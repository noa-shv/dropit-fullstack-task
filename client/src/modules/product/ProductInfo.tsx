import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {ProductDetails} from '../../types/product';

interface Props {
    product: ProductDetails
}

function ProductInfo({ product }: Props) {
    return(
        <Card sx={{height: '100%'}}>
            <CardContent>
                <Typography gutterBottom={true} variant="h5">{product.title}</Typography>
                <Typography gutterBottom={true} variant="subtitle2">{product.category}</Typography>
                <Typography variant="body2">{product.description}</Typography>
            </CardContent>
            <CardContent>
                <Typography gutterBottom={true} sx={{fontWeight: 'bold', fontSize: 17,}}>ILS{product.price}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center',}}>
                    <Rating
                        sx={{color:"black"}}
                        name="rating"
                        defaultValue={0}
                        value={product.rating.rate}
                        precision={0.1}
                        readOnly
                    />
                    <Typography>{product.rating.count} ratings</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ProductInfo;
