import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Container, Grid} from '@mui/material';
import CatalogCard from './CatalogCard';
import CatalogFilters from './CatalogFilters';

const product = {
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
}

function CatalogView() {
    return (
        <div>
            <CatalogFilters />
            <Container>
                <Grid container>
                    <Grid item xs={3}>
                        <CatalogCard
                            title={product.title}
                            img={product.image}
                            price={product.price}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default CatalogView;
