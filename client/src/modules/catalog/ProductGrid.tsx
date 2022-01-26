import {Grid} from "@mui/material";
import ProductCard from "./ProductCard";
import NoResults from '../../components/NoResults';

interface Props {
    products: Array<any>;
    isLoading: boolean;
}

function ProductGrid({products, isLoading}: Props) {
    if(products.length > 0 || isLoading) {
        return (
            <Grid container spacing={3}>
                {products.map((prod) => (
                    <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard
                            id={prod.id}
                            title={prod.title}
                            img={prod.image}
                            price={prod.price}
                        />
                    </Grid>
                ))}
            </Grid>
        );
    } else {
        return (<NoResults text="no results"/>);
    }
}
export default ProductGrid;
