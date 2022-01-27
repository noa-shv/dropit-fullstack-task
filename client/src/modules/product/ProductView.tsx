import {useParams, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import api from '../../contexts/api';
import {ProductDetails} from '../../types/product';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import CSS from 'csstype';
import ProductInfo from './ProductInfo'
import BackButton from '../../components/BackButton';
import Loading from '../../components/Loading';

const mediaWrapperStyle: CSS.Properties = {
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}

function ProductView() {
    const { id } = useParams();
    const [product, setProduct] = useState({rating: {rate:0, count:0}} as ProductDetails);
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();

    const getProduct = async() => {
        const fetchedProduct =  await api.product.find(id);
        if(fetchedProduct) {
            setProduct(fetchedProduct);
            setIsLoading(false);
        } else {
            navigate('/catalog');
        }
    }
    useEffect(()=>{
        getProduct();
    }, [id]);

    return(
        <div>
            <Loading isVisible={isLoading}/>
            <BackButton />
        <Grid container justifyContent='center' spacing={2}>
            <Grid item xs={5}>
                <ProductInfo product={product} />
                </Grid>
                <Grid item xs={4}>
                    <Card className="product-card">
                        <div style={mediaWrapperStyle}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={product.image}
                                sx={{
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    objectFit: "contain"
                                }}
                            />
                        </div>
                    </Card>
                </Grid>
            </Grid>
            </div>
    );
}

export default ProductView;
