import {Grid} from "@mui/material";
import ProductCard from "./ProductCard";
import NoResults from '../../components/NoResults';
import {Link} from 'react-router-dom';

interface Props {
    products: Array<any>;
    isLoading: boolean;
}

function ProductGrid({products, isLoading}: Props) {
    if(products.length > 0 || isLoading) {
        return (
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <ProductCard
                                product={product}
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        );
    } else {
        return (<NoResults text="no results"/>);
    }
}
export default ProductGrid;
